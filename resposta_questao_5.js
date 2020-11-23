/*
- Documentação do Processo de Resposta:

- Isso me lembrou alguns desafios de análise
combinatória que já resolvi;

- Em um exemplo com 5 amigos, na primeira posição
posso escolher entre 5 amigos, na segunda 4 (pois
já defini 1 amigo na primeira posição), na terceira
3 e assim por diante. Ou seja as possibilidades são 
5 * 4 * 3 * 2 * 1 = 120 possibilidades;

- Pensando em conceitos de análise combinatória, isso
se chama permutação simples. Já a multiplicação sucessiva
dos número anteriores que utilizei para calcular, se chama 
fatorial;
    - Permutação: troca dos componentes influencia;
    - Simples: os componentes não podem se repetir, afinal 
    uma pessoa não pode estar em 2 lugares ao mesmo tempo;

- Por fim, optei por separar em 2 funções, pois a função
calculateFactorial() pode eventualmente ser chamada por
outras funções.

*/

function getQtyPossibilitiesOrganizationForPhoto(peopleAmount) {
  return calculateFactorial(peopleAmount);
}

function calculateFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(getQtyPossibilitiesOrganizationForPhoto(1));
console.log(getQtyPossibilitiesOrganizationForPhoto(2));
console.log(getQtyPossibilitiesOrganizationForPhoto(3));
console.log(getQtyPossibilitiesOrganizationForPhoto(4));
console.log(getQtyPossibilitiesOrganizationForPhoto(5));
console.log(getQtyPossibilitiesOrganizationForPhoto(15));

/*

5 - Um grupo de amigos será colocado lado a lado para tirar uma foto. De quantos 
modos distintos os amigos podem se organizar para tirar a foto? Desenvolva uma 
função que receba um número de pessoas (valor inteiro) e retorne quantas 
possibilidades de organização existem para que o fotografo saiba o número de modos
distintos que esse grupo e outros grupos possam se organizar.

*/
