/*
- Documentação do Processo de Resposta

- Eu sinto que há uma forma mais elegante
de resolver esse problema, mas sinceramente,
não consegui pensar em nenhuma outra até a 
data de entrega desse desafio;

- A forma como resolvi foi meio bruta,
basicamente eu percorro a matriz, e
percorro todos os anos entre o ano
inicial e o final de trabalho;

- Para cada ano, eu verifico se já
existe uma chave no objeto qtyWorkersByYear.
A chave desse objeto é o ano, e o valor é
o número de trabalhores naquele ano;

- Se a chave não exisir, crio ela com o valor
1 inicial, representando o ano trabalhado
daquele trabalhador; 

- Se a chave existir, somo mais 1.

- Enquanto faço isso, sempre guardo
o ano com mais trabalhadores na variável
yearMaxWorkers. E a maior quantidade
de trabalhadores em um ano, na variável 
qtyMaxWorkers.

- Por fim, percorro o qtyWorkersByYear,
procurando anos em que a quantidade
de trabalhadores foi igual a yearMaxWorkers.
Quando achar, adiciono no array yearsMaxWorkers,
que será retornando informando os anos que houveram
mais trabalhadores ao mesmo tempo. 

*/

function yearWithMoreWorkers(matrix) {
  let yearMaxWorkers = 0;
  let qtyMaxWorkers = 0;
  let qtyWorkersByYear = {};
  let yearsMaxWorkers = [];
  for (initAndEndYear of matrix) {
    let initYear = initAndEndYear[0];
    let endYear = initAndEndYear[1];
    for (let year = initYear; year <= endYear; year++) {
      qtyWorkersByYear[year] === undefined
        ? (qtyWorkersByYear[year] = 1)
        : qtyWorkersByYear[year]++;
      if (qtyWorkersByYear[year] > qtyMaxWorkers) {
        yearMaxWorkers = year;
        qtyMaxWorkers = qtyWorkersByYear[year];
      }
    }
  }
  for (year in qtyWorkersByYear) {
    if (qtyWorkersByYear[year] === qtyMaxWorkers) {
      yearsMaxWorkers.push(year);
    }
  }
  return yearsMaxWorkers;
}

console.log(
  yearWithMoreWorkers([
    [1960, 2005],
    [1945, 2008],
    [1938, 1999],
  ])
);

console.log(
  yearWithMoreWorkers([
    [1960, 2005],
    [1945, 2008],
    [1938, 1999],
    [1965, 2005],
  ])
);

/*

4 - Considere um conjunto de pessoas aposentadas, onde cada pessoa começou a
trabalhar em ano X e aposentou em ano Y. Crie uma função que receba uma matriz
na seguinte estrutura [[x1,y1],[x2,y2],...[xn,yn]] e calcule em qual/quais 
ano/anos houve mais pessoas trabalhando.

Considere:

Os valores de X como o ano que os indívíduos começaram a trabalhar (x>0, x<y );
Os valores de Y como o ano que os indívíduos se aposentaram (y>0);
O ano de início deve ser considerado como ano trabalhado;
O ano de aposentadoria deve ser considerado como ano trabalhado.
Exemplo:
Input [[1960,2005],[1945,2008],[1938,1999],...]

*/
