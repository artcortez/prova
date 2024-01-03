/*  Utilizando destructuring, escreva uma função chamada formatarContato que aceite um 
objeto contato com propriedades como nome, email e telefone. A função deve extrair 
essas informações usando destructuring e retornar uma string formatada com essas 
informações. Por exemplo, se o objeto for {nome: "Ana Silva", email: 
"ana.silva@example.com", telefone: "123456789"}, a função deve retornar a string: 
"Nome: Ana Silva, Email: ana.silva@example.com, Telefone: 123456789" */

const formatarContato = (contato) => {
    let {nome, email, telefone} = contato;
    return (`nome: ${nome}, email: ${email}, telefone: ${telefone}`);
}

let contato = {nome: "Ana Silva", email: 
"ana.silva@example.com", telefone: "123456789"}
    
console.log(formatarContato(contato));