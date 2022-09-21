// Создать функцию для расчета произведения двух чисел, 
// вызываемого следующим образом: name(5)(2). Функция
//  должна возвращать результат (в середине функции не 
// должно быть консоль лога!)

function getMultiNumber(number1, number2) {
  let resMulti = number1 * number2
  return resMulti
}
const multiNumber = getMultiNumber(5, 2)
console.log(multiNumber)



// Создать функцию, вычисляющую 
// среднее арифметическое числовых элементов массива любой длины.

let numArray = [1, 2, 3]
function getMidArray() {
  result = numArray.reduce(
    (accum, item) =>
      accum = accum + item
  )
  return result / numArray.length
}
const midResult = getMidArray(numArray)
console.log(midResult)