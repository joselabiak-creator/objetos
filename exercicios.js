/*
  Abra este arquivo no GitHub Codespace da disciplina.

  O Exercício 1 já vem pronto, como exemplo. Rode primeiro:

      node exercicios.js

  Depois, complete os Exercícios 2, 3 e 4. Não altere outras partes
  deste arquivo. Ao executar novamente, o terminal mostrará:

  ✅ Correto -> o exercício está certo.
  ❌ Errado   -> compare o esperado com o que o código retornou.

  Se travar, releia o enunciado e o exemplo acima de cada função.
  Todos os exercícios usam Set, dando continuidade ao exemplo de
  remoção de elementos repetidos visto na aula anterior.
*/

// ------------------------------------------------------
// Função auxiliar - NÃO precisa mexer aqui
function testar(nomeExercicio, resultado, esperado) {
  const igual = JSON.stringify(resultado) === JSON.stringify(esperado);
  if (igual) {
    console.log(`✅ Correto - ${nomeExercicio}`);
  } else {
    console.log(`❌ Errado - ${nomeExercicio}`);
    console.log(`   Esperado: ${JSON.stringify(esperado)}`);
    console.log(`   Recebido: ${JSON.stringify(resultado)}`);
  }
}
// ------------------------------------------------------

/* ============================================================
   EXERCÍCIO 1 (EXEMPLO JÁ PRONTO - estude antes de começar)
   ============================================================
   contarUnicos conta quantos elementos diferentes existem no array.

   Exemplo:
   contarUnicos([1, 2, 2, 3, 4, 4, 4, 5]) deve retornar 5

   new Set(array) remove os repetidos. Depois, [...set] transforma o
   Set em array novamente, e .length conta quantos itens sobraram.
*/
function contarUnicos(array) {
  const semRepetidos = [...new Set(array)];
  console.log(`   Array sem repetição: [${semRepetidos}]`);
  return semRepetidos.length;
}

testar("Exercício 1 - contarUnicos", contarUnicos([1, 2, 2, 3, 4, 4, 4, 5]), 5);

/* ============================================================
   EXERCÍCIO 2 - AGORA É COM VOCÊ
   ============================================================
   Retorne apenas os elementos que aparecem mais de uma vez, sem
   repetir nenhum deles no resultado.

   Exemplo:
   encontrarRepetidos([1, 2, 2, 3, 4, 4, 4, 5]) deve retornar [2, 4]

   Use um Set para os elementos já vistos e outro Set para os repetidos.
   No final, transforme o segundo Set em array com [...set].
*/
function encontrarRepetidos(array) {
  // escreva seu código aqui
}

testar("Exercício 2 - encontrarRepetidos", encontrarRepetidos([1, 2, 2, 3, 4, 4, 4, 5]), [2, 4]);

/* ============================================================
   EXERCÍCIO 3 - AGORA É COM VOCÊ
   ============================================================
   Junte dois arrays em um só, sem elementos repetidos.

   Exemplo:
   unirSemRepetir(["Ana", "Bruno", "Carlos"], ["Bruno", "Diana", "Ana"])
   deve retornar ["Ana", "Bruno", "Carlos", "Diana"]

   Junte os arrays com [...array1, ...array2] e aplique a ideia
   do Exercício 1: Set para remover repetidos e [...set] para retornar.
*/
function unirSemRepetir(array1, array2) {
  // escreva seu código aqui
}

testar(
  "Exercício 3 - unirSemRepetir",
  unirSemRepetir(["Ana", "Bruno", "Carlos"], ["Bruno", "Diana", "Ana"]),
  ["Ana", "Bruno", "Carlos", "Diana"]
);

/* ============================================================
   EXERCÍCIO 4 - AGORA É COM VOCÊ
   ============================================================
   Retorne true se o array tiver algum elemento repetido, ou false
   se todos forem diferentes.

   Exemplos:
   temRepetido([101, 102, 103]) deve retornar false
   temRepetido([101, 102, 101]) deve retornar true

   Compare o .size de new Set(array) com o .length do array original.
*/
function temRepetido(array) {
  // escreva seu código aqui
}

testar("Exercício 4 - temRepetido (sem repetido)", temRepetido([101, 102, 103]), false);
testar("Exercício 4 - temRepetido (com repetido)", temRepetido([101, 102, 101]), true);