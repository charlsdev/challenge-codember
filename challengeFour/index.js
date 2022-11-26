const solutions = [],
   MIN_NUM = 11098,
   MAX_NUM = 98123,
   rgxTest = /55+/

const validNumber = (num) => {
   if (!rgxTest.test(num)) return false
   
   const numSplit = String(num).split('')
   
   for(let a = 0; a <= numSplit.length; a++){
      if(numSplit[a] > numSplit[a + 1]) return false
   }
   
   return true
}

for(let i = MIN_NUM; i <= MAX_NUM; i++){
   if(validNumber(i)){
      solutions.push(i)
   }
}

console.log(`submit ${solutions.length}-${solutions[55]}`)
