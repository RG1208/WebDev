// document.querySelector(".child").addEventListener("click", () => {

//     alert("Child Was clicked")
// })

// document.querySelector(".childContainer").addEventListener("click", () => {

//     alert("childContainer Was clicked")
// })

// document.querySelector(".container").addEventListener("click", () => {
//     alert("container Was clicked")
// })

// In order to stop propogation 
// e.stopPropogation can be used

document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("Child Was clicked")
})

document.querySelector(".childContainer").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("childContainer Was clicked")
})

document.querySelector(".container").addEventListener("click", (e) => {
    alert("container Was clicked")
})
