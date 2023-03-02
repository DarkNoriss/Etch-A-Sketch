const mainDiv = document.querySelector('#app')
const newPaintboardButton = document.querySelector('#newPaintBoard')

drawPaintboard(16)

function drawPaintboard(a) {
  let howManydivs = a
  ///let divsSquereRoot = Math.sqrt(howManydivs);

  for (let startRow = 0; startRow < howManydivs; startRow++) {
    let newDivRow = document.createElement('div')
    newDivRow.classList.add('app__row'+ startRow +'')
  
    for (let startCol = 0; startCol < howManydivs; startCol++) {
      let newDivCol = document.createElement('div')
      newDivCol.classList.add('app__col'+ startCol +'')
      newDivRow.appendChild(newDivCol)
    }
  
    mainDiv.appendChild(newDivRow)
  }
}

function deletePaintboard() {
  mainDiv.innerHTML = '';
}

function createNewPaintboard() {
  let howBig = prompt('How big u want the paint board to be?');

  if (howBig > 100) {
    alert('U cant make paint board bigger than 200!')
  } else {
    deletePaintboard()
    drawPaintboard(howBig)
  }
}

newPaintboardButton.addEventListener("click", (e) => {
  createNewPaintboard()
});