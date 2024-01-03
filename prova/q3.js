/*  Escreva uma função chamada verificarNumero que retorne uma Promise. A função deve 
gerar um número aleatório entre 1 e 10. Se o número gerado for maior que 5, a Promise 
deve ser resolvida com a mensagem "Número alto!". Se for 5 ou menor, a Promise deve 
ser rejeitada com a mensagem "Número baixo!".
*/

const verificarNumero = () => new Promise ((resove, reject) => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    if (numeroAleatorio > 5) {
        resove("Numero alto")
    }
    else{
        reject ("Numero baixo")
    }
})

verificarNumero().then(mensagem => console.log(mensagem)).catch(mensagem => console.error(mensagem))