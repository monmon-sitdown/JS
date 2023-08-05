// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openbtn = document.querySelector(".modal-btn")
const modalovly = document.querySelector(".modal-overlay")
const closebtn = document.querySelector(".close-btn")

openbtn.addEventListener("click", function() {
    if (!modalovly.classList.contains("open-modal")) {
        modalovly.classList.add("open-modal")
    }/* else {
        modalovly.classList.remove("open-modal")
    }*/
})

closebtn.addEventListener("click", function() {
    if (modalovly.classList.contains("open-modal")) {
        modalovly.classList.remove("open-modal")
    }
})