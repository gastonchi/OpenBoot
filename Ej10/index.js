import { suma, multiplica } from "./controller.js"
import chalk from "chalk"

const sum = suma(1,2)
const multi = multiplica(4,5)

console.log(`${chalk.blue.bgYellow.bold('El resultado de tu suma es:')} ${sum}`)
console.log(`${chalk.bgBlue.bold('El resultado de tu multiplicación es:')} ${multi}`)