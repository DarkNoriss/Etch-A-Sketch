const mainBody = document.querySelector('body')
const newPaintboardButton = document.querySelector('#newPaintBoard')
const mainDiv = document.querySelector('#app')
let divItems = []


drawPaintboard(16)

function drawPaintboard(a) {
  let howManydivs = a
  ///let divsSquereRoot = Math.sqrt(howManydivs);

  for (let startRow = 0; startRow < howManydivs; startRow++) {
    let newDivRow = document.createElement(`div`)

    for (let startCol = 0; startCol < howManydivs; startCol++) {
      let newDivCol = document.createElement(`div`)
      newDivCol.classList.add(`app__dot`)
      newDivRow.appendChild(newDivCol)
    }
    mainDiv.appendChild(newDivRow)
  }
  divItems = document.querySelectorAll(`[class*="app__dot"]`);
  listen()
}

function deletePaintboard() {
  mainDiv.innerHTML = ``;
}

function createNewPaintboard() {
  let howBig = parseInt(prompt(`How big u want the paint board to be?`));

  if (howBig > 900) {
    alert(`U cant make paint board bigger than 200!`)
  } else if (howBig < 0 || howBig == null || howBig == `` || isNaN(howBig)) {
    alert(`Paint board must be bigger than 0!`)
  } else {
    deletePaintboard()
    drawPaintboard(howBig)
  }
}

newPaintboardButton.addEventListener(`click`, (e) => {
  createNewPaintboard()
})

function listen() {
  for (let i = 0; i < divItems.length; i++){
    divItems[i].addEventListener(`mousedown`, drawClick);
    divItems[i].addEventListener(`mouseenter`, drawClickHover);
  }
}

function drawClick(e) {
  e.target.style.backgroundColor = `black`
}

function drawClickHover(e) {
  if (e.buttons > 0) {
    e.target.style.backgroundColor = `black`
  }
}







