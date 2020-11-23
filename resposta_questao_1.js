/**

- Documentação do Processo de Resposta

- Eu precisava percorrer o número, então transformei ele em uma string,
para depois dar um split();

- Depois pensei em extrair a rule, a partir dos dois primeiros números,
mas eles poderiam ser iguais, causando um erro.

- Então pensei, vou percorrer o array até achar um número que seja maior
ou menor, para assim definir a regra, e depois percorrer o array buscando
números que inflingissem essa regra.

- Entretanto, isso faria que eu tivesse que percorrer o array 2x, 1x para
achar a regra e 1x para tentar achar números que infligissem a regra.

- Por fim, decidir que ia tentar definir a regra e buscar números que
infligissem ela (caso estivesse definida) no mesmo "for"

- Nos testes, fiquei em dúvida se 852 era um número ordenado, afinal
a variação de-3, respeitava o enunciado "Variação de um dígito para
o outro deve ser 1 ou menor", mas o exemplo 7 elucida isso, deixando
claro que a variação só pode ser 0 ou 1.

*/

function isOrdered(number) {
  let digits = number.toString().split("");
  let rule = null;
  for (index in digits) {
    let currentDigit = digits[index];
    let nextDigit = digits[parseInt(index) + 1];
    if (nextDigit === undefined) {
      break;
    }
    if (rule === null) {
      rule = getRule(currentDigit, nextDigit);
    }
    if (rule !== null && ruleDisrespected(rule, currentDigit, nextDigit)) {
      return "Não está ordenado";
    }
  }
  return "Está ordenado";
}

function getRule(currentDigit, nextDigit) {
  if (currentDigit < nextDigit) {
    return "ASC";
  } else if (currentDigit > nextDigit) {
    return "DESC";
  } else {
    return null;
  }
}

function ruleDisrespected(rule, currentDigit, nextDigit) {
  let diff = Math.abs(currentDigit - nextDigit) * -1;
  if (diff > 1) {
    return true;
  } else if (rule === "ASC" && currentDigit > nextDigit) {
    return true;
  } else if (rule === "DESC" && currentDigit < nextDigit) {
    return true;
  } else {
    return false;
  }
}

console.log("1: " + isOrdered(12345678));
console.log("2: " + isOrdered(1223455678));
console.log("3: " + isOrdered(876543210));
console.log("4: " + isOrdered(152456457));
console.log("5: " + isOrdered(12356789));
console.log("6: " + isOrdered(13579));
console.log("7: " + isOrdered(9765421));
console.log("8: " + isOrdered(123454321));
console.log("9: " + isOrdered(12222222));
console.log("10: " + isOrdered(2111111));
console.log("11: " + isOrdered(1599));

/*
 * 1 - Crie uma função que receba um valor INTEIRO positivo, e verifique
 * se os DÍGITOS estão em ordenação sequencial CRESCENTE ou DECRESCENTE.
 * Pode considerar dígitos iguais como sequenciais (Variação de um dígito
 *  para o outro deve ser 1 ou menor)
 * Exemplo:
 * 1:  Input 12345678 -> Está ordenado
 * 2:  Input 1223455678 -> Está ordenado
 * 3:  Input 876543210 -> Está ordenado
 * 4:  Input 152456457 -> Não está ordenado
 * 5:  Input 12356789 -> Não está ordenado
 * 6:  Input 13579 -> Não está ordenado
 * 7:  Input 9765421 -> Não está ordenado
 * 8:  Input 123454321 -> Não está ordenado
 * 9:  Input 12222222 -> Está ordenado
 * 10: Input 2111111 -> Está ordenado
 * 11: Input 1599 -> Não está ordenado
 */
