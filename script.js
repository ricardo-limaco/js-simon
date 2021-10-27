function generateRandom(numeroMin, numeroMax) {
  return Math.floor(Math.random() * (numeroMax - numeroMin + 1) + numeroMin);
};


let arrayNumeri = [];

while (arrayNumeri.length < 5) {

  const numeroRandom = generateRandom(1, 100);

  const numeroVerificato = arrayNumeri.includes(numeroRandom);

  if (!numeroVerificato) {
    arrayNumeri.push(numeroRandom);
  }
};
console.log("Array numeri Random", arrayNumeri.sort(function (a, b) { return a - b }));





alert("Memorizza questi numeri: \n" + arrayNumeri.join(", "));

setTimeout(richiestaNumeri, 3000);
console.log("Timer di 3 Secondi come prova");




let arrayPrompt = ["primo", "secondo", "terzo", "quarto", "quinto"];
let numeriUtente = [];


function richiestaNumeri() {
  for (let i = 0; i < 5; i++) {

    const richiestaNumero = parseInt(prompt('Inserisci il ' + arrayPrompt[i] + ' numero.'));

    const richiestaNumeroVerificato = numeriUtente.includes(richiestaNumero);

    const arrayNumeriVerificato = arrayNumeri.includes(richiestaNumero);

    if (!richiestaNumeroVerificato && arrayNumeriVerificato) {
      numeriUtente.push(richiestaNumero);
    }
  }
  console.log("Array numeri indovinati", numeriUtente.sort(function (a, b) { return a - b }));

  if (numeriUtente.length === 0) {
    console.log(`Hai memorizzato ` + numeriUtente.length + ` numeri.`);
  } else {
    console.log(`Hai memorizzato ` + numeriUtente.length + ` numeri e sono: ` + numeriUtente.join(", "))
  }
};