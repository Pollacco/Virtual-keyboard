import * as storage from './storage.js'
import create from './create.js'
import language from './language.js'
import Key from './Key.js'

const main = create('main', '',
  [ create('h1', 'title', 'My Virtual Keyboard'),
    create('h3', 'subtitle', 'Virtual Keyboard for RSS-school task')])

export default class Keyboard {
  constructor(keysOrder) {
    this.keysOrder = keysOrder
    this.keysPressed = {}
    this.isCaps = false
  }

  init(langCode) {
    this.keyBase = language[langCode]
    this.output = create('textarea', 'output', null, main,
      ['placeholder', 'Just typing'],
      ['rows', 5],
      ['cols', 50],
      ['spellcheck', false],
      ['autocorrect', 'off'])
    this.container = create('div', 'keyboard', null, main, ['language', langCode])
    document.body.prepend(main)
    return this
  }

  generateLayout() {
    this.keyButtons = []
    this.keysOrder.forEach((row, i) => {
      const rowElement = create('div', 'keyboard__row', null, this.container, ['row', i + 1])
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`
      row.forEach((code) => {
        const keyObj = this.keyBase.find((key) => key.code === code)
        if (keyObj) {
          const keyButton = new Key(keyObj)
          this.keyButtons.push(keyButton)
          rowElement.appendChild(keyButton.div)
        }
      })
    })

    document.addEventListener('keydown', this.handleEvent)
    document.addEventListener('keyup', this.handleEvent)
  }

  handleEvent = (e) => {
    if (e.stopPropagation) e.stopPropagation()
    const { code, type } = e
    const keyobj = this.keyButtons.find((key) => key.code === code)
    if (!keyobj) return
    this.output.focus()

    if (type.match(/keydown|mousedown/)) {
      if (type.match(/key/)) e.preventDefault()
      keyobj.div.classList.add('active')

      if (code.match(/Control/)) this.ctrlKey = true
      if (code.match(/Alt/)) this.altKey = true

      if (code.match(/Control/) && this.altKey) this.switchLanguage();
      if (code.match(/Alt/) && this.ctrlKey) this.switchLanguage();

    } else if (type.match(/keyup|mouseup/)) {
      keyobj.div.classList.remove('active')

      if (code.match(/Control/)) this.ctrlKey = false
      if (code.match(/Alt/)) this.altKey = false
    }
  }

  switchLanguage = () => {
    const langAbbr = Object.keys(language);
    let langIdx = langAbbr.indexOf(this.container.dataset.language);
    this.keyBase = langIdx + 1 < langAbbr.length ? language[langAbbr[langIdx += 1]]
      : language[langAbbr[langIdx -= langIdx]];

    this.container.dataset.language = langAbbr[langIdx];
    storage.set('kbLang', langAbbr[langIdx]);
    this.keyButtons.forEach((button) => {
      const keyObj = this.keyBase.find((key) => key.code === button.code);
      if (!keyObj) return;
      button.shift = keyObj.shift;
      button.small = keyObj.small;
      if (keyObj.shift && keyObj.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
        button.sub.innerHTML = keyObj.shift;
      } else {
        button.sub.innerHTML = '';
      }
      button.letter.innerHTML = keyObj.small;
    });
  }
} 