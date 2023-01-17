// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que retorne a data da entrada com o mês por extenso;

let data = gets('');
let dataSplit = data.split('/');



if(dataSplit[1] == "1" || dataSplit[1] == "01") {
    print(dataSplit[0] + " de Janeiro de " + dataSplit[2]);
}
else if(dataSplit[1] == "02" ) {
    print(dataSplit[0] + " de Fevereiro de " + dataSplit[2]);
}
else if(dataSplit[1] == "03" ) {
    print(dataSplit[0] + " de Março de " + dataSplit[2]);
}
else if(dataSplit[1] == "04") {
    print(dataSplit[0] + " de Abril de " + dataSplit[2]);
}
else if(dataSplit[1] == "05") {
    print(dataSplit[0] + " de Maio de " + dataSplit[2]);
}
else if(dataSplit[1] == "06") {
    print(dataSplit[0] + " de Junho de " + dataSplit[2]);
}
else if(dataSplit[1] == "07") {
    print(dataSplit[0] + " de Julho de " + dataSplit[2]);
}
else if(dataSplit[1] == "08") {
    print(dataSplit[0] + " de Agosto de " + dataSplit[2]);
}
else if(dataSplit[1] == "09") {
    print(dataSplit[0] + " de Setembro de " + dataSplit[2]);
}
else if(dataSplit[1] == "10") {
    print(dataSplit[0] + " de Outubro de " + dataSplit[2]);
}
else if(dataSplit[1] == "11") {
    print(dataSplit[0] + " de Novembro de " + dataSplit[2]);
}
else if(dataSplit[1] == "12") {
    print(dataSplit[0] + " de Dezembro de " + dataSplit[2]);
}
