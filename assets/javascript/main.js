let dieRolls = []
const rollDieButton = document.querySelector('#rollDie')
const numRollsInput = document.querySelector('#howManyRolls')
let numDieSides = 5
let numRolls
let index = 0
let rollCount = 0

rollDieButton.addEventListener('click', function () {
    console.log('roll button clicked')
    numRolls = (numRollsInput.value)
    console.log(numRolls)

    while (rollCount < numRolls) {

        let eachDieRoll = (Math.round(Math.random() * numDieSides) + 1)
        console.log(eachDieRoll)

        dieRolls.push(eachDieRoll)
        console.log(dieRolls)



        rollCount++

    }






})