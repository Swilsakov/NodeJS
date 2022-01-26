// Вывести символы в строку разделяя их пробелом
// const str = 'asdasdasd'
// var strsplit = str.split('').join(' ')
// console.log(strsplit)

// Вывести символы в столбик
// const str = 'asdasdasd'
// var strsplit = str.split('').join('\n')
// console.log(strsplit)


// Замена каждого 3 символа на $
// var str = "asdasdasd";
// var result = str.replace(/(..)./g, "$1$");
// console.log(result)

// Надо чтобы n символов из конца строки переходило в начало abcdefgh -> (смещаем на 3 символа) fghabcde

var str = "abcdefgh"
var a = str.slice(0, 5)
var b = str.slice(-3, str.length)
// console.log(a)
// console.log(b)   
console.log(b + a)

// Замена четных индексов на '$'
// var str = "abcdefgh"
// for (var i = 0; i <= str.length; i++) {
//     if (i % 2 == 0) {
//         str = str.split('');
//         str[i] = '$';
//         str = str.join('');
//         }
//   }
// console.log(str)
  
