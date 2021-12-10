// fs => File System
const fs = require('fs')
const path = require('path')


//  Создание папки
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('папка успешно создана')
// })


// Создание файла с перезаписью
// const filePath = path.join(__dirname, 'test', 'text.txt')
// fs.writeFile(filePath, 'Hello nodejs!', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Файл создан')
    

// Добавление в файл
//     fs.appendFile(filePath, '\nHello again!', err => {
//         if (err) {
//             throw err
//         }
//         console.log('Файл перезаписан')
//     })
// })


// Чтение файла в Buffer
// const filePath = path.join(__dirname, 'test', 'text.txt')
// fs.readFile(filePath, (err, content) => {
//     if (err) {
//         throw err
//     }
//     console.log('Content: ', content)
// })


// Чтение файла 1)через метод toString
// const filePath = path.join(__dirname, 'test', 'text.txt')
// fs.readFile(filePath, (err, content) => {
//     if (err) {
//         throw err
//     }
//     const data = Buffer.from(content)
//     console.log(data.toString())
// })


// 2 через utf-8
const filePath = path.join(__dirname, 'test', 'text.txt')
fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }

    console.log(content)
})
