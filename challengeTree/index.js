const fs = require('fs')

const data = fs.readFileSync('colors.txt', 'utf-8')
const array = JSON.parse(data)

function countColors(array) {
   let count = 0,
      maxLine = 0,
      betPos = '',
      aftPos = '',
      colFin = ''

   for (let idx = 0; idx < array.length; idx += 2) {
      if (
         (
            (betPos === array[idx]) || (aftPos === array[idx + 1])
         ) && (
            array[idx - 1] !== array[idx]
         )
      ) {
         count += 2
      } else {
         count = 2
         betPos = array[idx]
         aftPos = array[idx + 1]
      }

      if (count > maxLine) {
         maxLine = count
         colFin = array[idx]
      }
   }

   return ({ total: maxLine, color: colFin })
}

const { total, color } = countColors(array)
console.log(`submit ${total}@${color}`)
