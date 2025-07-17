const obj = {
    id: 1,
    firstname: "Stavros"
}
// Add properties
// Mutable
obj.lastname = "Angelopoulos"

// Immutable way to add a key: value
const addToObj = (obj, field, value) => ({...obj, [field]: value})
addToObj(obj, 'lastname', 'Androutsos')

// Update
// Mutable
obj.firstname = "Bob"

// Immutable update - fresh copy
const updateObj = (obj, field, value) => (obj, field, value) => ({...obj, [field]: value})
updateObj(obj, 'firstname', 'Bob')

// Delete
// Mutable Delete
delete obj.firstname

// Immutable Delete
const deleteFromObj = (obj, field) => {
    const {[field]: _, ...objToReturn} = obj       // Destructure, rest operator
    return objToReturn
}

const newObj = deleteFromObj(obj, 'id')