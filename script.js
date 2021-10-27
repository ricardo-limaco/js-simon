function generateRandom(numeroMin, numeroMax) {
  return Math.floor(Math.random() * (numeroMax - numeroMin + 1) + numeroMin);
};


let arrayNumeri = [];

while (arrayNumeri.length < 5) {

  let numeroRandom = generateRandom(1, 100);

  let numeroVerificato = arrayNumeri.includes(numeroRandom)

  if (!numeroVerificato) {
    arrayNumeri.push(numeroRandom);
  }
}
console.log("Array numeri Random", arrayNumeri.sort(function(a,b){return a-b}));




alert("Memorizza questi numeri: \n" + arrayNumeri);



