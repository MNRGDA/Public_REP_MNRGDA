let count = 0

let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")
saveEl.textContent = "Previous enteries: "

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2



function add() {
    result = num1 + num2
    document.getElementById("sum-el").textContent = "Sum: " + result
}

function subtract() {
    result = num1 - num2
    document.getElementById("sum-el").textContent = "Subtract: " + result
}

function divide() {
    result = num1 / num2
    document.getElementById("sum-el").textContent = "Divide: " + result
}

function multiply() {
    result = num1 * num2
    document.getElementById("sum-el").textContent = "Multiply: " + result
}