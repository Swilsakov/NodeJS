// Создание веб-серверов

// Создание html страниц через код nodejs
// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         // 'Content-Type': 'text/plain' - .../plain - это показ вместе со структурой html <..> ... </..> 
//         'Content-Type': 'text/html'
//     })
//     res.end('<h1>Hello NodeJS!!!</h1>')
// })

// server.listen(3000, () => {
//     console.log('Server has been started...')
// })



// Маршрутизатор с шаблонами html 
// ==========================================-1-============================================
// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((req, res) => {
    
    
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
//             if (err) {
//                 throw err 
//             }
//             res.writeHead(200, {
//                 'Content-Type': 'text/html'
//             })
//             res.end(data)
//         })
//     } else if (req.url === '/contact') {
//         fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
//             if (err) {
//                 throw err 
//             }
//             res.writeHead(200, {
//                 'Content-Type': 'text/html'
//             })
//             res.end(data)
//         })
//     }
// })

// server.listen(3000, () => {
//     console.log('Server has been started...')
// })



// ==========================================-2-============================================
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url )
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'       
    }

    if (!ext) {
        filePath += '.html'
    }
    fs.readFile(filePath, (err, content) => {
        // если произошла ошибка
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        } 
        // если ошбики нет
        else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content)
        }
    })
})


const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`)
})
