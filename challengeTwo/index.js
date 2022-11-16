// const encrypt: string = "109105100117"
// const encrypt: string = "9911110010110998101114"
let message = ''
const encrypt = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101"

encrypt.split(' ').forEach((data) => {  
  for (let a = 0; a < data.length; a++) {
    let desde = a, hasta = 0
    
    data[a] === '1' 
      ? ( hasta = a + 3, a += 2 )
      : ( hasta = a + 2, a += 1 )
    
    message += String.fromCharCode(+data.slice(desde, hasta))
  }
  
  message += ' '
})

console.log(message.trim())