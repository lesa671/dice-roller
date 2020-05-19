let dieRolls = []
let index = 0

const rollDiceButton = document.querySelector('#rollDice')
const numDiceInput = document.querySelector('#howManyDice')
let rollTotalOutput = document.querySelector('#numRollTotal')
const allRollsButton = document.querySelector('#showAll')
const allRollsContainer = document.querySelector('.allRollsContainer')
const eachRollList = document.querySelector('#eachRoll')
const resetButton = document.querySelector('#reset')

// js variable for 'how many sides on dice' input box
let diceSidesInput = document.querySelector('#howManyDiceSides')

let numDiceSides = 6
let numRolls
let rollCount = 0
let sumDiceRolls

rollDiceButton.addEventListener('click', function () {
    console.log('roll button clicked')
    numRolls = (numDiceInput.value)
    console.log(numRolls)
    rollCount = 0

    while (rollCount < numRolls) {

        if (diceSidesInput.value >= 6 && diceSidesInput.value <= 20) {
            let eachDieRoll = (Math.ceil(Math.random() * diceSidesInput.value))
            console.log(eachDieRoll)

            dieRolls.push(eachDieRoll)
            console.log(dieRolls)

            sumDiceRolls = dieRolls.reduce(function (total, amount) {
                return total + amount 
            })
            
            console.log(sumDiceRolls);

        } else {
            diceSidesInput.value = ' '
            numDiceInput.value = ' '
            sumDiceRolls = 0
            numRolls = 0
        }

        rollCount++

        rollTotalOutput.innerHTML = sumDiceRolls
        console.log(rollTotalOutput.innerHTML);
        
    }
})

allRollsButton.addEventListener('click', function () {
    console.log('show all rolls button clicked')

    while (index < dieRolls.length) {

        let singleRoll = dieRolls[index]
        console.log(singleRoll)
        const singleRollList = '<li class=dice>' + singleRoll + '</li>' + '<br>'

        eachRollList.innerHTML += singleRollList

        index++
    }

})

//*create reset button//

resetButton.addEventListener('click', function () {
    console.log('reset button clicked')
    dieRolls.length = 0
    numDiceInput.value = ' '
    rollTotalOutput.innerHTML = 0
    eachRollList.innerHTML = ' '
    rollCount = 0
    index = 0
    diceSidesInput.value = ' '
})


