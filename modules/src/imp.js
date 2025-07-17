import PI from './lib2'  // Δεν θέλει braces γιατί είναι το default export
import {EPSILON, API_URL} from './lib2'

let radius = 10
let circumference = 2 * PI * radius
const equal = Math.abs(circumference) < EPSILON

