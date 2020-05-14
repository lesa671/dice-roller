let dieRolls = []
const rollDieButton = document.querySelector('#rollDie')
const numRollsInput = document.querySelector('#howManyRolls')
const rollTotalOutput = document.querySelector('#numRollTotal')
const allRollsButton = document.querySelector('#showAll')
let numDieSides = 5
let numRolls
let index = 0
let rollCount = 0
let sumDieRolls

rollDieButton.addEventListener('click', function () {
    console.log('roll button clicked')
    numRolls = (numRollsInput.value)
    console.log(numRolls)

    while (rollCount < numRolls) {

        let eachDieRoll = (Math.round(Math.random() * numDieSides) + 1)
        console.log(eachDieRoll)

        dieRolls.push(eachDieRoll)
        console.log(dieRolls)

        sumDieRolls = dieRolls.reduce(function (total, amount) {
            return total + amount

        })

        rollCount++

        console.log(sumDieRolls)
        rollTotalOutput.innerHTML = sumDieRolls
    }
    
})
    // const allRollsButton = document.querySelector('#showAll')
    allRollsButton.addEventListener('click', function() {
        console.log('show all rolls button clicked')
    })