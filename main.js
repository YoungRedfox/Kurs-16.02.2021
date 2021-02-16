// let inputs = Array.from(document.querySelectorAll('input[name="result"], input[type="text"]'))

// console.log(inputs)

// Zmiana string do int
// let changeToNumber = parseInt(input.value)

function getValueAndChangeInput(value) {

    // console.log(value)

    let input = document.querySelector('input[name="result"]')

    input.value += value

}

function resultCalc() {

    let input = document.querySelector('input[name="result"]')

    input.value = eval(input.value)
    
 
}

function changeSympol() {

    let input = document.querySelector('input[name="result"]')

    let arrayInput = input.value.split(" ")

    let getLastNumber = arrayInput[arrayInput.length - 1]

    console.log(getLastNumber)

}