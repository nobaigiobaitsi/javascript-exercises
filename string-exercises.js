// Reverse String

function reverseString(str) {
    // Either is fine and correct
    return str.split("").reverse().join("")
    // return [...str].reverse().join("")
}

console.log(reverseString("stavros"))
console.log(reverseString("Coding Factory"))


// Replace a string with obfuscation symbols (a -> @, e -> 3, i -> !, o -> 0, s -> $)

function obfuscate(password) {
    return password
        .replace(/a/gi, '@')
        .replace(/e/gi, '3')
        .replace(/i/gi, '!')
        .replace(/o/gi, '0')
        .replace(/o/gi, '$')
}

console.log(obfuscate("Password"))

// aaaabbbccca -> a4b3c3a

function compress(str) {

    let compressed = ''
    let count = 1

    for (let i =0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i + 1)) {
            count++;
        } else {
            compressed += str.charAt(i) + (count > 1 ? count : '')
            count = 1
        }
    }

    return compressed
}

console.log(compress('11daaaabbbcca'))