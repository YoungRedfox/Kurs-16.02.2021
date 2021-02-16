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

    arrayInput[arrayInput.length - 1] = arrayInput[arrayInput.length - 1] * (-1)

    input.value = arrayInput.join(" ")

}

function deleteLastOb() {
    
    let input = document.querySelector('input[name="result"]')

    let arrayInput = input.value.split(" ")

    if (arrayInput[arrayInput.length - 1] === ""){
            
            arrayInput.pop()

        }

    let lastString = arrayInput[arrayInput.length - 1].trim()

    arrayInput[arrayInput.length - 1] = lastString.substr(0, lastString.length - 1)

    input.value = arrayInput.join(" ")

}

function deleteLastNum() {
    
    let input = document.querySelector('input[name="result"]')

    let arrayInput = input.value.split(" ")

    arrayInput.pop()
    
    input.value = arrayInput.join(" ")

}

function deleteValueInput(){
    document.querySelector('input[name="result"]').value = ""
}

function percentage() {

    let input = document.querySelector('input[name="result"]')

    let arrayInput = input.value.split(" ")

    let arrayHelp = arrayInput.filter((item, index)=>{
        if(index < arrayInput.length-2){
            return item
        }
    }).join(" ")

    let valueToPercentage = eval(arrayHelp)

    let lastNumber = arrayInput[arrayInput.length - 1] / 100

    arrayInput[arrayInput.length - 1] = (valueToPercentage * lastNumber).toFixed(2)

    console.log(arrayInput)

    input.value = arrayInput.join(" ")

}

function potega() {

    let input = document.querySelector('input[name="result"]')

    let xd = Math.pow(input.value, 2)

    input.value = xd

}

function pierwiastek() {

    let input = document.querySelector('input[name="result"]')

    let xd = Math.sqrt(input.value)

    input.value = xd

}

function percentageLast() {

    let input = document.querySelector('input[name="result"]')

    let arrayInput = input.value.split(" ")



    let lastNumber = 1 / arrayInput[arrayInput.length - 1]

    arrayInput[arrayInput.length - 1] = lastNumber.toFixed(2)

    console.log(arrayInput)

    input.value = arrayInput.join(" ")

}