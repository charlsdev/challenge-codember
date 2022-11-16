import fs from "fs";

var line = '', numLine = 0
const newArray = [], data = fs.readFileSync('users.txt', 'utf-8');
const structure = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const lines = data.split(/\r\n/g)

lines.forEach(item => {
   if (item == '') {
      newArray.push(line)
      numLine = 0
      line = ''
   } else {
      line += ` ${item}`
   }
})

const dataJS = newArray.map(item => {
   const data = item.trim().split(' ')
   const itemObj = {};

   for (const itemUs of data) {
      const [key, value] = itemUs.split(':');
      itemObj[key] = value
   }

   return itemObj;
})

const userValidate = dataJS
      .filter(user => structure.every(fields => fields in user));

console.log(userValidate.length);
console.log(userValidate.at(-1));
console.log(`submit ${userValidate.length}${userValidate.at(-1).usr}`);