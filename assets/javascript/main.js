let dieRolls = []
let index = 0
const rollDiceButton = document.querySelector('#rollDice')
const numDiceInput = document.querySelector('#howManyDice')
const rollTotalOutput = document.querySelector('#numRollTotal')
const allRollsButton = document.querySelector('#showAll')
const allRollsContainer = document.querySelector('.allRollsContainer')
const eachRollList = document.querySelector('#eachRoll')
let numDiceSides = 5
let numRolls
let rollCount = 0
let sumDiceRolls

rollDiceButton.addEventListener('click', function () {
    console.log('roll button clicked')
    numRolls = (numDiceInput.value)
    console.log(numRolls)

    while (rollCount < numRolls) {

        let eachDieRoll = (Math.round(Math.random() * numDiceSides) + 1)
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
        const singleRollList = '<li class=dice>' + singleRoll + '</li>'

        eachRollList.innerHTML += singleRollList

        index++
    }

})