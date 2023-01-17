// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let vector = [];
let par = [];
let odd = [];

for (let i = 0; i < 5; i++) {
  let input = parseInt(gets(""));
  vector.push(input);
  
  if (input % 2 === 0) {
    par.push(input);
  } else {
    odd.push(input);
  }
}

console.log("Vetor: " + vector);
console.log("Par(es): " + par);
console.log("Impar(es): " + odd);