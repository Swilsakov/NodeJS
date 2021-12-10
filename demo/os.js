// Инфа про ОС

const os = require('os')
console.log('Операционная система:', os.platform())
console.log('Архитектура процессора:', os.arch())
console.log('Инфа по процессору:', os.cpus())
console.log('Всего памяти:', os.totalmem())
console.log('Свободная память:', os.freemem())
console.log('Домашняя директория:', os.homedir())
console.log('Включен:', os.uptime())