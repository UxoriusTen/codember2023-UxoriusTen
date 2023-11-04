const fs = require('fs');
const message = fs.readFileSync('text.txt','utf-8')

function findPatron (message){
  let words = message.split(' ')
  let array = message.split(' ')
  for(let i = 0;i<words.length;i++){
    words[i] = words[i].toLowerCase()
    array[i] = array[i].toLowerCase()
  }
  //No duplicates

  let nodu = words.filter((item,index)=>{
    return words.indexOf(item)===index
  })

  console.log(nodu);
  //count
  let count = [];
  for(let i = 0;i<nodu.length;i++){
    count[i]=0
  }
  nodu.forEach((element,index)=>{
    for(let i = 0;i<array.length;i++){
      if(element == array[i]){count[index]++}
    }
  })
  // console.log(count);
  //write patron
  let patron = ''
  for(let i = 0;i<nodu.length ;i++){
    patron=patron + words[i] + count[i]
  }
  // console.log(patron);
  fs.writeFileSync('patron.txt',patron)
  // return patron
}

// const patron = findPatron(message)
findPatron(message)
// console.log(patron);

// console.log(words);