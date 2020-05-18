let dieRolls = []
let index = 0

const rollDiceButton = document.querySelector('#rollDice')
const numDiceInput = document.querySelector('#howManyDice')
const rollTotalOutput = document.querySelector('#numRollTotal')
const allRollsButton = document.querySelector('#showAll')
const allRollsContainer = document.querySelector('.allRollsContainer')
const eachRollList = document.querySelector('#eachRoll')
const resetButton = document.querySelector('#reset')

let numDiceSides = 6
let numRolls
let rollCount = 0
let sumDiceRolls
let removeSingleRollList

rollDiceButton.addEventListener('click', function () {
    console.log('roll button clicked')
    numRolls = (numDiceInput.value)
    console.log(numRolls)


    while (rollCount < numRolls) {


        let eachDieRoll = (Math.floor(Math.random() * numDiceSides) + 1)
        console.log(eachDieRoll)

        dieRolls.push(eachDieRoll)
        console.log(dieRolls)

        sumDiceRolls = dieRolls.reduce(function (total, amount) {
            return total + amount

        })

        rollCount++

        console.log(sumDiceRolls)
        rollTotalOutput.innerHTML = sumDiceRolls
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

})

