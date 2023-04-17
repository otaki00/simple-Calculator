// define the numbers i will use in my app
let numbers = [
    {0: 'clearAll'},
    {1: 'clearLast'},
    {2: 1},
    {3: 2},
    {4: 3},
    {5: 4},
    {6: 5},
    {7: 6},
    {8: 7},
    {9: 8},
    {10: 9},
    {11: 0},
]
// define the operations i will use in my app
let operations = [
    {0: 'div'},
    {1: 'mul'},
    {2: 'sub'},
    {3: 'sum'},
    {4: 'eql'},
]

// get items from dom
let opSection = document.getElementById("operations")
let numberSection = document.getElementById("numbers")
let screenText = document.getElementById("screen-text")

// define global variables that important to app
// the first number that the user will enter
let number1 = 0

// the second number that the user will add
let number2 = null

// define the operation that user select
let op = null

// decide if the user enter the fisrt number, and to enter the second one
let switchNumbers = false

// final result that will be shown in screen
let result = null


// hvae some errors
// let makeMoveBasedOnNumber = (number, value, currText) => {
//     // first state if the number not define yet 
//     if (!isNaN(value) && number == 0){
//         // it the value not 0, assign it to number 1
//         if ( parseInt(value) !== 0){
//             currText = value
//             number = parseInt(currText)
//             screenText.innerText = `${number}`
//         }
//     // if the number define and we want to add more numbers
//     }else if(!isNaN(value) && number != 0 ){
//         // use string to concatinat the previous value, with new one
//         currText = number.toString() + value.toString()
//         // parse it to integar
//         number = parseInt(currText)
//         // display it
//         screenText.innerText = `${number}`
//     // chekc if we want to clear all 
//     }else if(isNaN(value) && value === 'clearAll'){
//         // return number1 = 0
//         number = 0
//         // display it
//         screenText.innerText = 0
//     // chekc if we want to clear last digit
//     }else if(isNaN(value) && value === 'clearLast'){
//         // divide yhe number on 10, to get ride of last digit
//         number = parseInt(number / 10)
//         // display it
//         screenText.innerText = `${number}`
//     }
// }


// function to simulate the calculator functionality 
// the function had para value, that we will use to check the state and do someting
let printOnScreen = (value) => {
    // get the text from calc screen
    let currText = screenText.innerText

    // chekc if the value is one of the operatoin,(and must number2 be not define yet, if the op is equal)
    if (value == 'mul' | value == 'sub' | value == 'sum' | value =='div'){
        // switch to enter second number
        switchNumbers = true
        // save the operation
        op = value
    // do the calculations if the condtions checked
    }else if (op != null && (value == 'eql' && number2 != null)) {
        // make switch based on op variable(the one how saved the operation)
        switch (op) {
            // check cases
            case 'mul': result = number1 * number2
                // display the result to screen
                screenText.innerText = `${result}`
                // assign result to number1, if we want to make another op on it
                number1 = result

                // (back to original state)
                // return number2 to null
                number2 = null
                // also here 
                op = null
                // and here
                switchNumbers = false
                break;
            
            // do the same to other operations

            case 'sum': result = number1 + number2
                screenText.innerText = `${result}`
                number1 = result
                number2 = null
                op = null
                switchNumbers = false
                break;
            case 'div': result = parseInt(number1 / number2)
                screenText.innerText = `${result}`
                number1 = result
                number2 = null
                op = null
                switchNumbers = false
                break;
            case 'sub': result = number1 - number2
                screenText.innerText = `${result}`
                number1 = result
                number2 = null
                op = null
                switchNumbers = false
                break;

        }
    }

    // enter number 1 and 2, based on switchNumbers flag
    // fisrt check if want to enter number 1
    if (!switchNumbers){
        // makeMoveBasedOnNumber(number1, value,currText)

        // first state if the number not define yet 
        if (!isNaN(value) && number1 == 0){
            // it the value not 0, assign it to number 1
            if ( parseInt(value) !== 0){
                currText = value
                number1 = parseInt(currText)
                screenText.innerText = `${number1}`
            }
        // if the number define and we want to add more numbers
        }else if(!isNaN(value) && number1 != 0 ){
            // use string to concatinat the previous value, with new one
            currText = number1.toString() + value.toString()
            // parse it to integar
            number1 = parseInt(currText)
            // display it
            screenText.innerText = `${number1}`
        // chekc if we want to clear all 
        }else if(isNaN(value) && value === 'clearAll'){
            // return number1 = 0
            number1 = 0
            // display it
            screenText.innerText = 0
        // chekc if we want to clear last digit
        }else if(isNaN(value) && value === 'clearLast'){
            // divide yhe number on 10, to get ride of last digit
            number1 = parseInt(number1 / 10)
            // display it
            screenText.innerText = `${number1}`
        }
    // do the same for second number
    } else {
        if (!isNaN(value) && number2 == null){
            if ( parseInt(value) !== 0){
                currText = value
                number2 = parseInt(currText)
                screenText.innerText = `${number2}`
            }
        }else if(!isNaN(value) && number2 != 0 ){
            currText = number2.toString() + value.toString()
            number2 = parseInt(currText)
            screenText.innerText = `${number2}`
        }else if(isNaN(value) && value === 'clearAll'){
            number2 = 0
            screenText.innerText = 0
        }else if(isNaN(value) && value === 'clearLast'){
            number2 = parseInt(number2 / 10)
            screenText.innerText = `${number2}`
        }
    }
}


// functoin for add the numbers, and structe them in html
let addNumbers = () => {
    // loop through numbers array
    for(let i =0 ; i< numbers.length ;i++){
        // get dictionary, to get the value later
        let numberDic = numbers[i]
        // create html element that will hold the value
        let numberDiv = document.createElement('div')
        // add css class
        numberDiv.classList.add("grid-item")
        // add eventlistener, to to do something base on current state
        numberDiv.addEventListener("click",() => printOnScreen(numberDic[i]))
        // structe the elements
        if (numberDic[i] == 'clearAll'){
            numberDiv.innerText = `C`
            numberDiv.classList.add("span-w")
        }else if(numberDic[i] == 'clearLast'){
            numberDiv.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'
        }else if (numberDic[i] == 0){
            numberDiv.innerText = `0`
            numberDiv.classList.add("span-t")
        }else {
            numberDiv.innerText = `${numberDic[i]}`
        }
        // app element to html dom
        numberSection.appendChild(numberDiv)
    }
}

// call the function 
addNumbers()


// same as the function below, but for operations
let addOperations = () => {
    for(let i =0 ; i< operations.length ;i++){
        let opDic = operations[i]
        let opDiv = document.createElement('div')
        opDiv.classList.add("grid-item")
        opDiv.addEventListener("click",() => printOnScreen(opDic[i]))
        if(opDic[i] == 'div'){
            opDiv.innerText = '÷'
        }else if(opDic[i] == 'mul') {
            opDiv.innerText = '×'
        }else if(opDic[i] == 'sub') {
            opDiv.innerText = '-'
        }else if(opDic[i] == 'sum') {
            opDiv.innerText = '+'
        }else  {
            opDiv.innerText = '='
        }
        opSection.appendChild(opDiv)
    }
}

// call the function
addOperations()