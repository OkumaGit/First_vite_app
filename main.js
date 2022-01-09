import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <div class="flexbox">
    <p>The new block in Vite</p>

    <div class="buttons">
      <input class="button" type="button" value="add">
      <input class="button" type="button" value="delete">
    </div>

  </div>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
