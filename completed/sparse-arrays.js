// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

let strings = ['ab', 'ab', 'abc']
let queries = ['ab', 'abc', 'bc']

// results [2, 1, 0]

// input: array of strings 
// declare a function
// iterate over the queries array using forEach
// iterate over the strings array using reduce. Set the initial value to 0. 
    // if query is strictly equal to current value, incrementacc
// return acc
// output: array of integers, where each integers represents the number of times a query appears in the strings array.

function matchingStrings(strings, queries) {
    let result = []
    queries.forEach(query => {
        let count = strings.reduce((acc, string) => {
            if (query === string) {
                acc++
            }
        return acc
        }, 0)
        result.push(count)
    })
    return result
}

console.log(matchingStrings(strings, queries))