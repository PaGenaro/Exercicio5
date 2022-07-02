// Crie um array que receba 5 itens e exiba no console.

let arrayItens = ["Colar", "fotografia", "chocolate", "gato", "familia"];
console.log(arrayItens)


// Utilize um método para adicionar um nome ao inicio do array.

 arrayItens.unshift("amizade")
 console.log(arrayItens)

// Utilize um método para remover o último nome do array.

arrayItens.pop()
console.log(arrayItens)


// Utilize um método para adicionar dois nomes ao fim do array.

arrayItens.splice(5,1, "beleza", "paz")
console.log(arrayItens)


// Utilize um método para remover o primeiro nome do array.

delete arrayItens[0]
console.log(arrayItens)


// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort()
console.log(numbers)
