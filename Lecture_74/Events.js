let button = document.getElementById("btn")

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "button was clicked"
})

// button.addEventListener("dblclick", () => {
//     document.querySelector(".box").innerHTML = "button was clicked"
// })  

// button.addEventListener("contextmenu", () => {
//     console.log("Dont hack us by Right click Please")
// })

// document.addEventListener("keydown", (e) => {
//     console.log(e, e.key, e.keyCode)
// })

// button.addEventListener("mouseover", () => {
//     console.log("Mouse was hovered")
// })