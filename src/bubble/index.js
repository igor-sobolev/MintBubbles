import svg from './bubble.svg';

class Bubble extends HTMLButtonElement {

  constructor() {
    super();
    this.cheburek = 'AAAAAAAAAAA!';
  }

  connectedCallback() {
    this.innerHTML = svg + `lol kek {cheburek}`;
    this.addEventListener('click', () => alert('The button had been clicked'));
  }

  disconnectedCallback() {

  }

  set cheburek(prop) {
    this.cheburek = prop;
  }

  get cheburek() {
    return this.cheburek;
  }
}

document.registerElement('bubble', Bubble);

var bubble = new Bubble();
bubble.properties = { text: 'Loaded from JavaScript' };
document.querySelector('body').appendChild(bubble);