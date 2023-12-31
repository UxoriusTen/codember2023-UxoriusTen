function compiler(code){
	
	if (!code){code=''}

	let symbols = code.split('')
	let initVal = 0
	let resolve = ''

	/* 
	"#" Incrementa el valor numérico en 1.
	"@" Decrementa el valor numérico en 1.
	"*" Multiplica el valor numérico por sí mismo.
	"&" Imprime el valor numérico actual.
	*/

	symbols.forEach(symb=>{
		if(symb=='#'){initVal++}
		else if(symb=='@'){initVal--}
		else if(symb=='*'){initVal=initVal**2}
		else if(symb=='&'){resolve=resolve+initVal}
	})

	console.log(resolve);
}

async function getText(){
	return await (await fetch('https://codember.dev/data/message_02.txt')).text()
}

async function decode(){
	try{
		const processes = await getText()

		compiler(processes)
	
	}catch(e){console.log(e);}
}

decode();