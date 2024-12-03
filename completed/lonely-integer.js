// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
let numbers = [1,2,3,4,3,2,1]
// The unique element is 4.

// input: array of integers
    // declare a function returnLoneInteger
        // iterate through the array of integers and find integer that occurs ONCE
            // use reduce to create a new object where the key is the integer and the value is the number of times the integer appears
        // the key that has a value of one is the unique integer 
        // declare a variable called integersAndCounts
            // access the values using Object.Entries
            // flatten the Object.Entries because it will return an array of arrays
            // declare a variable loneInteger
            // use forEach to iterate through integersAndCounts, include index as an argument 
                // if number is equal to 1, push integersAndCounts at index position minus 1 to loneInteger
        // return loneInteger make sure to parseInt because value pushed to loneInteger will be a string
// output: one integer

function returnLoneInteger(numbers) {
    let integerCount = numbers.reduce((acc, num) => {
        if (!acc[num]) {
            acc[num] = 1
        } else {
            acc[num] ++
        }
    return acc
    }, {})
    let integersAndCounts = Object.entries(integerCount).flat()
    let loneInteger = []
    integersAndCounts.forEach((integer, index) => {
        if (integer === 1) {
            loneInteger.push(integersAndCounts[index - 1])
        }
    })
    return parseInt(loneInteger)
}
console.log(returnLoneInteger(numbers))

function returnLoneInteger2(numbers) {
    let integerCount = numbers.reduce((acc, num) => {
        if (!acc[num]) {
            acc[num] = 1
        } else {
            acc[num] ++
        }
    return acc
    }, {})

    for (let x in integerCount) {
        if (integerCount[x] === 1) {
            return parseInt(x)
        }
    }
}
console.log(returnLoneInteger2(numbers))

function returnLoneInteger3(numbers) {
    let integerCount = numbers.reduce((acc, num) => {
        if (!acc[num]) {
            acc[num] = 1
        } else {
            acc[num] ++
        }
    return acc
    }, {})
    return numbers.find(number => integerCount[number] === 1)
}
console.log(returnLoneInteger3(numbers))

function returnLoneInteger4(numbers) {
   return numbers.find(number => {
        return numbers.indexOf(number) === numbers.lastIndexOf(number)
    })
}
console.log(returnLoneInteger4(numbers))