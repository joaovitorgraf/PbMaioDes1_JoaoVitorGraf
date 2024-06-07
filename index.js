const modulos = require("./modulos"); // Importa os métodos do objeto criado no arquivo modulos.js

function gerarSequenciaDeCores() {
  modulos.criarArquivo(); // Verifica se o arquivo resutlado.txt existe, caso não tenha ele será criado

  const arrCores = ["verde", "azul", "amarelo", "vermelho"];
  let arrTemp = []; // Array temporário para auxiliar na criação da sequência de cores
  let sequenciaTemp = ""; // Variável temporária para salvar a sequência de cores sorteada como string
  const arr = [];

  for (let i = 0; i < 1000; i++) {
    for (let i = 0; i < 4; i++) {
      let numeroAleatorio = Math.round(Math.random() * 10);

      // Se numeroAleatorio for 0, 1, 2 ,3 e 4 será sorteado a cor Vermelha, dando a ela peso 5
      if (numeroAleatorio <= 4) {
        arrTemp.push(arrCores[3]);
        // Se numeroAleatorio for 5, 6, e 7 será sorteado a cor Amarela, dando a ela peso 3
      } else if (numeroAleatorio > 4 && numeroAleatorio <= 7) {
        arrTemp.push(arrCores[2]);
        // Se numeroAleatorio for 8, e 9 será sorteado a cor Azul, dando a ela peso 2
      } else if (numeroAleatorio > 7 && numeroAleatorio <= 9) {
        arrTemp.push(arrCores[1]);
        // Se numeroAleatorio for 10 será sorteado a cor Verde, dando a ela peso 1
      } else {
        arrTemp.push(arrCores[0]);
      }
    }

    sequenciaTemp = `${arrTemp[0]},${arrTemp[1]},${arrTemp[2]},${arrTemp[3]}\n`;

    arr.push(sequenciaTemp);

    arrTemp = [];
    sequenciaTemp = "";
  }

  modulos.escreverNoArquivo(arr); // Salvando no arquivo a sequência sorteada

  modulos.resultado();
}

gerarSequenciaDeCores();
