// Closure

const { b } = require("framer-motion/client")

function createCounter() {         // (function factory)
    let count = 0                  // Οι τοπικές μεταβλητές είναι private state

    return {
        increment : function increment() {
            count++
        },

        getCount : function getCount() {
            return count
        }
    }
}

const counter = createCounter()         // Δημιουργείται ένα closure αλλά παραμένει το state.
counter.increment()             // Γίνεται 1
counter.increment()             // Γίνεται 2
console.log(counter.getCount())





function calculator() {
    let memory = 0

    return function add(a, b) {
        memory = a + b
        return memory
    }
}

const myAdd = calculator()
console.log(myAdd(3, 10))
console.log(myAdd(3, 70))


// Not this, υπάρχει closure και επομένως
// οι inner function έχουν πρόσβαση στο private
// state - outer state.
// Variables are private by default
// Private & public API



function calculator2() {
    let memory = 0

    return {
        add : function(a, b) {
            memory = memory + a + b
            return memory
        },
        sub : function(a, b) {
            memory = a - b
            return memory
        }
    }
}

let calc = calculator2()
console.log(calc.add(5, 6))
console.log(calc.sub(10, 2))