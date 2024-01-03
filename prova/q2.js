/* . Utilizando arrow function, escreva uma função chamada capitalizarTitulos que use o 
método map para transformar uma lista de títulos de livros (strings) em uma lista com 
cada palavra dos títulos capitalizada. Por exemplo, se a função receber o array ["o 
pequeno príncipe", "dom casmurro", "a metamorfose"], ela deve retornar ["O Pequeno 
Príncipe", "Dom Casmurro", "A Metamorfose"].
 */

//toUpperCase()

const titulosLivros = ["o pequeno príncipe", "dom casmurro", "a metamorfose"]

const capitalizarTitulos = (titulos) => titulos.map(titulo => titulo.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))

const titulosCapitalizados = capitalizarTitulos(titulosLivros)

console.log(titulosCapitalizados)