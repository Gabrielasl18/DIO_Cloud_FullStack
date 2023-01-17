// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que contabilize quantos espaços em branco e quantas vogais existem
//na string de entrada;


let str = gets(''); 
let strSplit = str.split('');
let i = 0;
let vogais = 0;
let vazio = 0;

while(i <= strSplit.length) {   
    
    if(strSplit[i] == "a" || strSplit[i] == "e" || strSplit[i] == "i" || strSplit[i] == "o" || strSplit[i] == "u") {
        vogais++;
    }
    else if(strSplit[i] == "A" || strSplit[i] == "E" || strSplit[i] == "I" || strSplit[i] == "O" || strSplit[i] == "U") {
        vogais++;
    }
    if(strSplit[i] == " ") {
        vazio++;
    }
    i++;
}

print("Espacos em branco: " + vazio + " Vogais: " + vogais);
//print("Vogais: " + vogais);