d = Math.random()
console.log(d)

let a = prompt("enter first number")
let b = prompt("enter second number")
let c = prompt("Enter the operation you want to perform")

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
}
if (d <= 0.1) {
    c = obj[c]
    console.log(`The result is ${`eval(${a} ${c} ${b})`} `)
}
else { console.log(`The result is ${`eval(${a} ${c} ${b})`} `) };