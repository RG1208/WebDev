function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
// let a = setInterval(() => {
//     document.querySelector(".childContainer").style.background = getRandomColor();
// }, 1000);

// console.log(a)
// clearInterval can be used to clear this timeout function

let a = setTimeout(() => {
    document.querySelector(".childContainer").style.background = getRandomColor();
}, 5000);

console.log(a)

// clearTimeout can be used to clear this timeout function