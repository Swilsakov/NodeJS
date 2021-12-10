// два варианта написания кода
// (function(exports, require, module, __dirname, __filename) {
    // const chalk = require('chalk')
    // const text = require('./data')
    
    // console.log(chalk.red(text));
    
    
// })


const chalk = require('chalk')
const text = require('./data')

console.log(chalk.blue(text));
console.log(__dirname)
console.log(__filename)