const DRAGGABLE_ELEMENTS_WIDTH = 100
const DRAGGABLE_ELEMENTS_HEIGHT = 100

let currentContentWidth = null
let currentContentHeight = null
let currentDiv = null

document.addEventListener('DOMContentLoaded', () => {
   onResize() // to initialize currentContentWidth / currentContentHeight
   renderDraggableElements()
   attachDragEvents()
})

function attachDragEvents() {
   //-- Exercice principal : Implémentez le drag and drop

   const divElement=document.getElementsByClassName("draggableBox");
   //get all divs
   //mouse mouve to get number of the div
   //get data from this div : style.left style.top 
   //add the difference to css properties after mousedown and up
    
   //-- Exercice bonus 1 : la dernière box relachée doit être au dessus des autres
   //-- Exercice bonus 2 : lorsque deux box sont en contact, elles doivent être teintes en rouge
}

function renderDraggableElements() {
   const contentElement = document.getElementById('content')
   const maxLeft = currentContentWidth - DRAGGABLE_ELEMENTS_WIDTH
   const maxTop = currentContentHeight - DRAGGABLE_ELEMENTS_HEIGHT
   
   for (let i = 0; i <= 10; i++) {
      const divElement = document.createElement('div')
      divElement.className = 'draggableBox'
      divElement.appendChild(document.createTextNode(`Box nº${i}`))
      divElement.style.left = Math.floor(Math.random() * maxLeft) + 'px'
      divElement.style.top = Math.floor(Math.random() * maxTop) + 'px'
      contentElement.appendChild(divElement)
   }
}

window.addEventListener('optimizedResize', onResize)

function onResize() {
   const contentElement = document.getElementById('content')
   
   //-- Exercice Bonus 3: implémenter ici le repositionnement des box lorsque la fenêtre change de taille, les box doivent proportionnellement se retrouver à la même place
   
   currentContentWidth = contentElement.offsetWidth
   currentContentHeight = contentElement.offsetHeight
}

// See https://developer.mozilla.org/en-US/docs/Web/Events/resize
// Prevent resize event to be fired way too often, this means neither lags nor freezes
{
   function throttle(type, name, obj = window) {
      let running = false
      const event = new CustomEvent(name)
      obj.addEventListener(type, () => {
         if (running) return
         running = true
         requestAnimationFrame(() => {
            obj.dispatchEvent(event)
            running = false
         })
      })
   }

   /* init - you can init any event */
   throttle('resize', 'optimizedResize');
}