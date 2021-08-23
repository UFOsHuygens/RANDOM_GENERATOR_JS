var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var name = "bola";
var max = 2**30;

for (var c = 0; c < max; c++) {
	var names = alphabet[Math.floor(Math.random() * alphabet.length)] +
	alphabet[Math.floor(Math.random() * alphabet.length)] +
	alphabet[Math.floor(Math.random() * alphabet.length)] +
	alphabet[Math.floor(Math.random() * alphabet.length)];

	console.log(names);

	if (names == name) {
		c = c + max;
		console.log(`A palavra ${name} foi gerada com ${c-max} tentativas!`)
	}
	
}