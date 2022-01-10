const app = document.getElementById('app')
const box = document.getElementById('box')
const booksKey = 'books', booksSeparator = '|||'

box.onmousedown = function (e) {
  const { target } = e

  if (!(target instanceof HTMLParagraphElement))
    return

  target.onblur = () => {
    target.contentEditable = false
    save()
  }

  target.contentEditable = true
}

app.onclick = function (e) {
  const { target } = e

  if (!(target instanceof HTMLInputElement))
    return

  if (target.type != 'button')
    return

  const { value } = target

  if (value == 'add') {
    addBook('New book')
    save()
  }

  if (value == 'del') {
    delBook()
    save()
  }
}

function addBook(input = '') {
  const p = document.createElement('p')
  p.innerText = input
  box.appendChild(p)
}

function delBook() {
  box.querySelector('p')?.remove()
}

function restore() {
  const data = localStorage.getItem(booksKey) || ''
  const dataSplit = data.split(booksSeparator)
    .map(e => e.trim())
    .filter(e => e)

  for (let book of dataSplit)
    addBook(book)
}

function save() {
  const books = [...box.querySelectorAll('p')].map(e => {
    return e.innerText
  })

  localStorage.setItem(booksKey, books.join(booksSeparator))
}

restore()