const data = require('./mecenas.json')

let newArray = [], auxArray = []

const newData = data.map((val, idx) => {
   return { idx: idx, val: val}
})

const deleteUser = (array) => {
   for (let a = 0; a < array.length; a += 2) {
      newArray.push(array[a])

      if (array[a + 1] === undefined) newArray = newArray.slice(1, newArray.length)
   }

   if(newArray.length > 1) {
      auxArray = newArray
      newArray = []

      deleteUser(auxArray)
   }

   return newArray
}

const resp = deleteUser(newData)
console.log(`submit ${resp[0].val}-${resp[0].idx}`)
