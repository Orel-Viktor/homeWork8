// Создать функцию для расчета произведения двух чисел, 
// вызываемого следующим образом: name(5)(2). Функция
//  должна возвращать результат (в середине функции не 
// должно быть консоль лога!)

function getMultiNumber(number1) {
  return (number2) => {
    return number1 * number2
  }
}
const multiNumber = getMultiNumber(5)(2)
console.log(multiNumber)



// Создать функцию, вычисляющую 
// среднее арифметическое числовых элементов массива любой длины.

let numArray = [1, 2, 3, 4, 5, 6, 78]
function getMidArray() {
  result = numArray.reduce(
    (accum, item) =>
      accum = accum + item
  )
  return result / numArray.length
}
const midResult = getMidArray()
console.log(midResult)


// Создать функцию, которая удаляет из строки все символы, переданные вторым аргументом. 
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor"


function replaceChars(str = "", chars) {
  let newArr = []
  for (let char of str.split('')) {
    if (!chars.includes(char)) {
      newArr.push(char)
    }
  }
  return newArr.join('')
}

const getReplaceChars = replaceChars("Hello world", ['l', 'd'])
console.log(getReplaceChars)
