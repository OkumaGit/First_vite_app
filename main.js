import './style.css'
import './app.js'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <div class="flexbox">
    <p>The new block in Vite</p>

    <div class="buttons">
      <input class="button add" type="button" value="add" onclick="onClick()">
      <input class="button delete" type="button" value="del">
    </div>
    <div id="box"></div>

  </div>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

