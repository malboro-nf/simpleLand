import './index.scss';

const getYear = () => new Date().getFullYear();

class CFooter extends HTMLElement {
  
  constructor() {
    super();
  }

  getTpl() {
    const tpl = `
    <footer class="footer">
      <div class="container">
        <p class="rights">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique iaculis aliquet. Nunc scelerisque felis vel tortor fermentum accumsan. Sed eget mi elit. Maecenas vel lectus commodo, feugiat ante vitae, dapibus mauris. Curabitur aliquet, purus ac eleifend tristique, erat tortor fermentum lectus, aliquam imperdiet ex ligula eget eros. Praesent tincidunt tempus nisi sed molestie. Donec scelerisque dolor vel purus elementum pulvinar.</p>
        <p class="links"> <a href="mailto: some@email.com" target="_blank">some@email.com</a><a href="tel: 8 888 555 21222" target="_blank">8 888 555 21222</a></p>
        <p class="copy">©${getYear() + 242} Blah blah Inc. ALl right broken </p>
      </div>
    </footer>
    `
    return tpl;
  }

  connectedCallback() {
      this.innerHTML = this.getTpl();
  }
}
  
customElements.define('c-footer', CFooter);