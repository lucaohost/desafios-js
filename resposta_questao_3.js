/*
- Documentação do Processo de Resposta:
 
- Eu apliquei a mesma lógica quando resolvemos uma equação
matemática, resolvendo a partes internas, removendo os 
parentes/colchetes/chaves que circundam a expressão.
Por exemplo: [5 * (15 + 2)] -> [5 * 17] -> 22;

- Na prática então, eu dei um split() na string,
para poder percorrer o array de caracteres. Percorrendo
ele, eu vou até achar um caracter fechador '}' ou ']'
ou ')';

- Após achar o caracter fechador, eu olho para o caracter
anterior a ele, que deve ser um caracter abridor correspondente.
Por exemplo, se eu achar ')', o caracter anterior deve ser '(';

- Se o caracter anterior estiver correto, eu dou um splice(),
para remover o caracter anterior e o atual. Além disso
eu zero i, para reiniciar o loop e evitar que tente iterar um 
indice que não existe;

- Se o caracter anterior estiver incorreto, retorno 'sequencia invalida';

- Por fim, faço uma validação adicional para pegar sequencias em que há
apenas caracteres abridores. Por exemplo '{[('. Essa validação basicamente
faz um regex para cada caracter e verifica se a string possui o mesmo número
carcteres abridores de cada tipo. Por exemplo, se tiver 3 '{', é obrigatório
que tenha 3 '}'.

- Ah, mas porque eu não fiz apenas essa validação, de verificar se há
o mesmo número de caracteres abridores e fechadores? Porque muitas vezes
temos caracteres com seus respectivos pares, em uma expressão inválida.
Por exemplo: "{([}])", a sequência de aberturas e fechamentos está errada,
pelo menos do ponto de vista matemático. Agora se o intuito da função
era apenas verificar se cada caracter abridor, tinha o mesmo número
de caracteres fechadores, então dá pra chamar direto a função
allCharsHasCorrespondents(), que fará essa validação sem percorrer
o array.

*/

function isValidSequence(sequence) {
  let chars = sequence.split("");
  for (let i = 0; i < chars.length; i++) {
    let currentChar = chars[i];
    let prevChar = chars[i - 1];
    if (prevChar === undefined) {
      continue;
    }
    if (isClosingChar(currentChar)) {
      if (getOpeningCharByClosingChar(currentChar) !== prevChar) {
        return "sequencia invalida";
      } else {
        chars.splice(i - 1, 2);
        i = 0;
      }
    }
  }
  if (allCharsHasCorrespondents(sequence)) {
    return "sequencia valida";
  }
  return "sequencia invalida";
}

/**
 * Verifica se a quantidade de chaves/colchetes/parenteses
 * de abertura, são iguais a quantidade dos mesmo de fechamento
 * @param string sequence
 */
function allCharsHasCorrespondents(sequence) {
  let qtyOpeningBraces = (sequence.match(/{/g) || []).length;
  let qtyClosingBraces = (sequence.match(/}/g) || []).length;
  let qtyOpeningBrackets = (sequence.match(/\[/g) || []).length;
  let qtyClosingBrackets = (sequence.match(/\]/g) || []).length;
  let qtyOpeningParentheses = (sequence.match(/\(/g) || []).length;
  let qtyClosingParentheses = (sequence.match(/\)/g) || []).length;
  return (
    qtyOpeningBraces === qtyClosingBraces &&
    qtyOpeningBrackets === qtyClosingBrackets &&
    qtyOpeningParentheses === qtyClosingParentheses
  );
}

/**
 * Verifica se é um caracter de fechamento
 * @param string char
 */
function isClosingChar(char) {
  return char === ")" || char === "]" || char === "}";
}

/**
 * Retorna o carácter de abertura correspondente
 * @param string closingChar sempre deve ser passado um caracter de fechamento
 */
function getOpeningCharByClosingChar(closingChar) {
  let correspondentChars = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  return correspondentChars[closingChar];
}

console.log(isValidSequence("{[()(){}[]]{}}"));
console.log(isValidSequence("{[(()]}"));
console.log(isValidSequence("{}[]()"));
console.log(isValidSequence("((){}[[])"));
console.log(isValidSequence("{[("));

/*
Desafio 3:
Crie uma função que recebe uma string com qualquer sequência dos seguintes caracteres
 '[', '{', '(', ')', '}', ']' e retorne se a sequência é uma sequência válida ou não. 
 Uma sequência é válida se as chaves, parênteses e colchetes abrem e fecham corretamente

Exemplo:
{ [ ( ) ( ) { } [ ] ] { } } é uma sequência válida
{ [ ( ( ) ] } não é uma sequência válida (Há um parêntese posicionado incorretamente)
{ } [ ] ( ) é uma sequência válida
( ( ) { } [ [ ] ) não é uma sequência válida (Há uma chave posicionado incorretamente)

*/
