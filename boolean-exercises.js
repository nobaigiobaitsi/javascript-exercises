// If value is falsy(0, 0.0, undefined, null, false, " ") -> (\ud83E\uDD25)emoji + Falsy
// If value is truthy -> (\u2705)green tick + Truthy

const checkTruthy = value => value ? "\u2705 Truthy" : "\uD83E\uDD25 Falsy"

console.log(checkTruthy([]))
console.log(checkTruthy(0))
console.log(checkTruthy('false'))

