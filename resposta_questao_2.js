/**

- Documentação do Processo de Resposta:

- Fiz um "for" para percorrer o array, guardando
cada numero percorrido como uma chave do objeto
iteratedNumbers;

- Ainda nesse "for", verifico se a chave do número
atual existe no objeto iteratedNumbers, se sim, adiciono
uma chave no objeto repeatedNumbers;
  
- Eu usei um objetos, em vez de um arrays, porque nos próximos
loops, não preciso percorrer o array de iteratedNumbers, para
saber se o número atual já existe, pois verifico se existe
uma chave do número atual no objeto iteratedNumbers. Dessa
forma evito um for dentro de for, que aumenta o custo de
processamento exponencialmente. A mesma lógica se aplica
para o objeto repeatedNumbers, pois teria que verificar
se o número repetido, não já foi adicionado, pois um
número pode se repetir mais que 1x;
  
- Além disso, optei por utilizar um objeto com chaves,
em vez de um array com chaves, porque manipular arrays com
chaves no JS, fica meio bugado, pois o array fica
com espaços vazios e com o length errado. Por exemplo:
let a = [];
a[0] = true;
a[2] = true;
console.log('Se eu iterar esse array com empty, vai dar ruim:');
console.log(a);
console.log('O array possui ' + a.length + ' elementos, só que não.');

- Também optei em salvar como true o valor da chave, pois teoricamente
um booleano ocupa menos espaço do que um int. É praticamente irrelevante
a diferença de uso de memória, mas achei melhor explicar minha escolha;

- Por fim, chamo o Object.keys() para pegar as chaves do meu objeto, que
são os números que se repetiram.

*/

function getRepeatedNumbers(numbers) {
  let iteratedNumbers = {};
  let repeatedNumbers = {};
  for (number of numbers) {
    if (iteratedNumbers[number] === undefined) {
      iteratedNumbers[number] = true;
    } else {
      repeatedNumbers[number] = number;
    }
  }
  return Object.keys(repeatedNumbers);
}

console.log(getRepeatedNumbers([4, 5, 44, 98, 4, 5, 6, 7]));
console.log(getRepeatedNumbers([44, 5, 44, 98, 4, 5, 6, 7]));
console.log(getRepeatedNumbers([4, 51, 44, 98, 4, 51, 6, 7]));
console.log(getRepeatedNumbers([4, 5, 44, 7, 4, 5, 6, 7]));
console.log(getRepeatedNumbers([4, 5, 44, 98, 98, 5, 6, 7]));
console.log(getRepeatedNumbers([4, 4, 4, 4, 4, 4, 4, 4]));
console.log(getRepeatedNumbers([1, 4, 4, 4, 4, 4, 4, 0]));
console.log(getRepeatedNumbers([1, 4, 4, 4, 4, 4, 4, 1]));

/* 2 - Crie uma função que receba um array de inteiros como parâmetro e verifique se
 neste array existem números duplicados, caso exista, retorne um novo array com os
 valores que se repetem.

 Exemplo:<br/>
Input `[4,5,44,98,4,5,6,7]` &rarr; Output `[4,5]`
*/
