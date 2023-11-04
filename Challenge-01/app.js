const fs = require('fs');
const message = fs.readFileSync('text.txt','utf-8')

function findPatron (message){
  let array = message.split(' ')
  for(let i = 0;i<array.length;i++){
    array[i] = array[i].toLowerCase()
  }

  //No duplicates
  let nodu = array.filter((item,index)=>{
    return array.indexOf(item)===index
  })

  //create the array that count how many times a word repeats
  let count = [];
  for(let i = 0;i<nodu.length;i++){
    count[i]=0
  }
  // count
  nodu.forEach((element,index)=>{
    for(let i = 0;i<array.length;i++){
      if(element == array[i]){count[index]++}
    }
  })
  //write patron
  let patron = ''
  for(let i = 0;i<nodu.length ;i++){
    patron=patron + nodu[i] + count[i]
  }
  // write the answer in patron.txt file
  fs.writeFileSync('patron.txt',patron)
  // return patron
}

findPatron(message)
