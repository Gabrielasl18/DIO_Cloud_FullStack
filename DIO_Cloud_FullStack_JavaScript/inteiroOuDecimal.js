// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let valor = gets("");
let number = valor;
let newArray = number.split(",");

if (newArray.length > 1) {
  print("Decimal");
} else {
  print("Inteiro");
}

//TODO: Descubra se o valor é inteiro ou decimal