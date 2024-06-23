const massEl = document.getElementById("mass-el")
const VolumeEl = document.getElementById("volume-el")
const lenghtEl = document.getElementById("length-el")
const input = document.getElementById("numToConvert")

let value = input.value
renderValues(value)
input.addEventListener("change", function() {
    value = input.value
    renderValues(value)
})

function renderValues(valueToConvert) {
    let metersToFeet = (valueToConvert * 3.2808399)
    let a = metersToFeet.toFixed(3)
    let feetToMeters = (valueToConvert / 3.2808399)
    let b = feetToMeters.toFixed(3)
    let litersToGallons = (valueToConvert / 3.78541178)
    let c = litersToGallons.toFixed(3)
    let gallonsToLiters = (valueToConvert * 3.78541178)
    let d = gallonsToLiters.toFixed(3)
    let kilosToPounds = (valueToConvert * 2.20462262)
    let e = kilosToPounds.toFixed(3)
    let poundsToKilos = (valueToConvert / 2.20462262)
    let f = poundsToKilos.toFixed(3)
    lenghtEl.textContent = `${valueToConvert} meters = ${a} feet | ${valueToConvert} feet = ${b} meters `
    VolumeEl.textContent = `${valueToConvert} liters = ${c} gallons | ${valueToConvert} gallons = ${d} liters `
    massEl.textContent = `${valueToConvert} kilos = ${e} pounds | ${valueToConvert} pounds = ${f} kilos`
}