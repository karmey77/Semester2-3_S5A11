// define sample function to randomly return an item in an array
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

// Define random text function
function generateRandomText(textLength = 5){
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const collection = []
        .concat(lowerCaseLetters.split(''))
        .concat(upperCaseLetters.split(''))
        .concat(numbers.split(''))

    let randomText = ''
        for (let i = 0; i < Number(textLength); i++) {
            randomText += sample(collection)
        }

    return randomText
}

module.exports = generateRandomText