function removeMultiplesOfThree() {
    let numbers = Array.from({length: 101}, (_, i) => i);
    let filteredNumbers = numbers.filter(num => num % 3 !== 0);
    console.log(filteredNumbers);
}

function addNumbersToArray() {
    let numbers = Array.from({length: 101}, (_, i) => i);
    let extendedNumbers = numbers.concat(Array.from({length: 51}, (_, i) => i + 100));
    console.log(extendedNumbers);
}

function addThreeToEach() {
    let numbers = Array.from({length: 101}, (_, i) => i);
    let modifiedNumbers = numbers.map(num => num + 3);
    console.log(modifiedNumbers);
}

function printIndexRange() {
    let numbers = Array.from({length: 101}, (_, i) => i);
    console.log(numbers.slice(20, 41));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleAndSort() {
    let numbers = Array.from({length: 101}, (_, i) => i);
    shuffleArray(numbers);
    console.log("Shuffled Array:", numbers);
    numbers.sort((a, b) => b - a);
    console.log("Sorted in Descending Order:", numbers);
}
