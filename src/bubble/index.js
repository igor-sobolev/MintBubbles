class Bubble extends HTMLElement {

  constructor() {
    super();
    //this.cheburek = 'AAAAAAAAAAA!';
    //this.innerHTML = '<img src="bubble.svg">';
  }

  connectedCallback() {
    this.addEventListener('click', () => alert('The button had been clicked'));
  }

  // set cheburek(prop) {
  //   this.cheburek = prop;
  // }

  // get cheburek() {
  //   return this.cheburek;
  // }
}

document.registerElement('m-bubble', Bubble);

let bubble = new Bubble();
document.querySelector('body').appendChild(bubble);