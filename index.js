const modulos = require("./modulos");

function gerarSequenciaDeCores() {
  modulos.criaArquivo();

  const arrCores = ["verde", "azul", "amarelo", "vermelho"];

  let arrTemp = [];
  let sequenciaTemp = "";

  for (let i = 0; i < 1000; i++) {
    for (let i = 0; i < 4; i++) {
      let numeroAleatorio = Math.round(Math.random() * 10);

      if (numeroAleatorio <= 4) {
        arrTemp.push(arrCores[3]);
      } else if (numeroAleatorio > 4 && numeroAleatorio <= 7) {
        arrTemp.push(arrCores[2]);
      } else if (numeroAleatorio > 7 && numeroAleatorio <= 9) {
        arrTemp.push(arrCores[1]);
      } else {
        arrTemp.push(arrCores[0]);
      }
    }

    sequenciaTemp = `${arrTemp[0]},${arrTemp[1]},${arrTemp[2]},${arrTemp[3]}`;

    modulos.escreverNoArquivo(sequenciaTemp);

    arrTemp = [];
    sequenciaTemp = "";
  }
}

gerarSequenciaDeCores();

setTimeout(() => {
  modulos.resultado();
}, 1000);
