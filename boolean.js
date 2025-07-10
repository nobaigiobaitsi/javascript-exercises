let inputName = undefined
let username = inputName || 'default user'

console.log(username)  // default user


let apiURL = undefined
const publicApiURL = apiURL && getFromURL(apiURL) //
console.log(publicApiURL)

function getFromURL(url) {
    return "Something from URL"
}

