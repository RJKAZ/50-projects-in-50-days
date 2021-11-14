// bascily we need to switch the active class for the panels. 

//first bring in all the panels into the javascript

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })

})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}