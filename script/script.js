let amount = document.querySelectorAll('input')[0]
let interest = document.querySelectorAll('input')[1]
let button = document.querySelector('button')
let answer1 = document.querySelectorAll('p')[0]
let answer2 = document.querySelectorAll('p')[1]

function calc() {
    let interestVal = interest.value.split('%').map(Number)
    let amountVal = amount.value

    let i = (interestVal[0]/100)  * amountVal

    answer2.innerText += " R " + eval(`${amountVal} + ${((interestVal[0]/100)  * amountVal)}`)
    answer1.innerText += " R " + i

    
}

button.addEventListener('click',calc ) 