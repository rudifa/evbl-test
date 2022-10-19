import { html, LitElement } from 'lit'
import { styleSheet } from '../assets/css/styles.js'

const versions = { ...window.electron.process.versions }

export class VersionsLit extends LitElement {
  static styles = styleSheet

  static properties = {
    name: { type: String }
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="versions">
        <ul>
          <li>Electron v${versions.electron}</li>
          <li>Chromium v${versions.chrome}</li>
          <li>Node v${versions.node}</li>
          <li>V8 v${versions.v8}</li>
        </ul>
      </div>
    `
  }
}
customElements.define('versions-lit', VersionsLit)
