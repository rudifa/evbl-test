import { html, css, LitElement } from 'lit'
import { styleSheet } from '../assets/css/styles.js'

const versions = { ...window.electron.process.versions }

export class HelloLit extends LitElement {
  static styles = styleSheet

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="versions">
        <h3 class="lit-dark" >
          Hello <a class="lit-lite" target="_blank" href="https://lit.dev/docs/">Lit</a> from a vite electron app!
        </h3>
      </div>
    `
  }
}
customElements.define('hello-lit', HelloLit)
