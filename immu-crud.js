const numbers = [1, 2, 3, 4]

// Mutable
numbers.push(5)
numbers.splice(3, 0, 5)

// Immutable - Fresh Copy -- Insert at end
const addToArrayEnd = (arr, num) => {
    return [...numbers , num ]
}

// Immutable - Fresh Copy -- Insert at start
const addToArrayFirst = (arr, num) => {
    return [num, ...numbers ]
}

// Add to index
const addToArrayAt = (arr, num, index) => {
    return [...numbers.slice(0, index), num, ...numbers.slice(index)]
}


// Update

// Mutable
numbers.splice(3, 1, 8)

// Immutable
const updateOne = (arr, index, newVal) => arr.map((val, i) => (i === index) ? newVal: val)


// Delete

// Mutable Delete
let index = numbers.indexOf(1)
if (index !== -1) numbers.splice(index, 1)

// Immutable Delete
const removeFromArray = (arr, num) => arr.filter(n => n !== num)