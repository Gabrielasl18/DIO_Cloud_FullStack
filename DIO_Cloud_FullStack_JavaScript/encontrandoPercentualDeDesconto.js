// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let M, S; 
let desconto, x;

M = parseInt(gets()); 
S = parseInt(gets()); 

desconto  = S * (100/10);
x = (desconto / M) * 10;
result = 100 - x;
print("O desconto foi de " + result + "%");

//TODO: Retorne o percentual de desconto que foi aplicado no produto