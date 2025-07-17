const point3D = new Object()
point3D.x = 5
point3D.y = 10
point3D.z = 20

const point2D = {
    x: 10,
    y: 20,
    showY() {
        return `${this.y}`
    }
}

console.log(point2D.x)
console.log(point2D['x'])

point2D.showX = function() {
    return `${this.x}`
}

for (let key in point3D) {
    console.log(`${key}: ${point3D[key]}`)
}

for (const [key, value] of Object.entries(point3D)) {
    console.log(`${key}: ${value}`)
}

const cart = {
    items: [],
    addItem(item, price) {
        this.items.push({item, price})
    },
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0)
    }
}

cart.addItem('Milk', 2)
cart.addItem('Eggs', 5)
console.log(cart.calculateTotal())  // 7

// Object destructuring

const {x: myX, y, z, t = 0 } = point3D
console.log(`${myX}, ${y}, ${z}`)

// Without destructuring - verbose
function display3DPoint(point) {
    console.log(`x: ${point['x']}`)
    console.log(`y: ${point['y']}`)
    console.log(`z: ${point['z']}`)
}

// With desrtucturing
function display3DPoint2({x, y, z = 'Not provided'}) {
    console.log(`x: ${x}`)
    console.log(`y: ${y}`)
    console.log(`z: ${z}`)
}

const p2 = {
    x: 15,
    y: 18,
    z: 22,
}

display3DPoint2(p2)