function compiler(code){

	let symbols = code.split('')
	let initVal = 0
	let resolve = ''

	/* 
	"#" Incrementa el valor numérico en 1.
	"@" Decrementa el valor numérico en 1.
	"*" Multiplica el valor numérico por sí mismo.
	"&" Imprime el valor numérico actual.
	*/

	for (let i = 0;i<symbols.length;i++){
		if(symbols[i]=='#'){initVal++}
		else if(symbols[i]=='@'){initVal--}
		else if(symbols[i]=='*'){initVal=initVal**2}
		else if(symbols[i]=='&'){resolve=resolve+initVal}
	}

		console.log(resolve);
}



async function decode(){
	try{
		processes = await (await fetch('https://codember.dev/data/message_02.txt')).text()

		compiler(processes)
	
	}catch(e){console.log(e);}
}

decode();