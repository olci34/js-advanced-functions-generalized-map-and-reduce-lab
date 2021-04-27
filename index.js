// Add your functions here
function map(arr, func) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]))
    }
    return result
}

function reduce(arr, callback, initialVal) {
    let result;
    if (initialVal) {
        result = initialVal
        for (let i = 0; i < arr.length; i++) {
            result = callback(arr[i],result)
        }
    } else {
        result = arr[0]
        for (let i = 1; i < arr.length; i++) {
            result = callback(arr[i], result)
        }
    }
    return result
  }