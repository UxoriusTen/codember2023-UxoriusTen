// const fs = require('fs')

// let text = fs.readFileSync('text.txt','utf-8')
// text = text.split('\n')// obtengo cada linea


async function getInfo(){
	var info = await fetch('https://codember.dev/data/encryption_policies.txt')
	info = await info.text()
	return info
	
}

async function desencrypt(){
	let info = await getInfo()
	
	info= info.split('\n')// obtengo cada linea
	let incorrect=[]

	info.forEach(arr=>{
	
		let narr = arr.split(' ');// separo los datos de cada linea
		
		// Obtengo las cotas de la letra
		let index = narr[0].indexOf('-')
		let min = narr[0].slice(0,index);
		let max = narr[0].slice(index+1,narr[0].length);
		
		//Caracter a buscar
		let char = narr[1].slice(0,-1);
		
		//Conseguir la cadena de texto (pass)
		let pass
		if (narr[2].indexOf('\r')>0){
			pass = narr[2].slice(0,narr[2].indexOf('\r'));
			pass = pass.split('')
		}else {pass = narr[2];pass = pass.split('');}
	
		//buscar la cantidad de letras
		let count=0;
		pass.forEach(letter=>{if (letter==char) count++;})
		
		//Verificar si es correcto
		if(!(count>=min && count<=max)){incorrect.push(pass.join(''))}
	})
	
	console.log(incorrect[41]);
}

desencrypt()
/* 
text.forEach(arr=>{
	
	let narr = arr.split(' ');// separo los datos de cada linea
	
	// Obtengo las cotas de la letra
	let index = narr[0].indexOf('-')
	let min = narr[0].slice(0,index);
	let max = narr[0].slice(index+1,narr[0].length);
	
	//Caracter a buscar
	let char = narr[1].slice(0,-1);
	console.log(char)
	
	//Conseguir la cadena de texto (pass)
	let pass
	if (narr[2].indexOf('\r')>0){
		pass = narr[2].slice(0,narr[2].indexOf('\r'));
		pass = pass.split('')
	}else {pass = narr[2];pass = pass.split('');}

	//buscar la cantidad de letras
	let count=0;
	pass.forEach(letter=>{if (letter==char) count++;})
	
	//Verificar si es correcto
	if(!(count>=min && count<=max)){incorrect.push(pass.join(''))}
})

console.log(incorrect);
*/





// browserType.slice(0, 3);

// console.log(text);