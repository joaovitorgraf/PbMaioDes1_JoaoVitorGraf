const fs = require("fs");
const chalk = require("chalk");

function gerarSequenciaDeCores() {
  criaArquivo();

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

    escreverNoArquivo(sequenciaTemp);

    arrTemp = [];
    sequenciaTemp = "";
  }
}

function criaArquivo() {
  if (fs.existsSync("./resultado.txt")) {
    console.log("Arquivo já esxiste");
  } else {
    fs.writeFile("resultado.txt", "", (err) => {
      if (err) {
        throw err;
      } else {
        console.log("Arquivo Criado com Sucesso");
      }
    });
  }
}

function escreverNoArquivo(sequencia) {
  sequencia = sequencia + "\r\n";

  fs.appendFile("resultado.txt", sequencia, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Escrito com sucesso!");
    }
  });
}

function resultado() {
  fs.readFile("./resultado.txt", (err, conteudo) => {
    if (err) {
      throw err;
    } else {
      const str = `${conteudo}`;
      const split = str.split("\r\n");
      let verde = 0;
      let azul = 0;
      let amarelo = 0;
      let vermelho = 0;

      split.forEach((arr) => {
        const convertStr = `${arr}`;
        const splitConvertStr = convertStr.split(",");

        for (let i = 0; i < splitConvertStr.length; i++) {
          if (splitConvertStr[i].includes("verde")) {
            verde += 1;
          } else if (splitConvertStr[i].includes("azul")) {
            azul += 1;
          } else if (splitConvertStr[i].includes("amarelo")) {
            amarelo += 1;
          } else if (splitConvertStr[i].includes("vermelho")) {
            vermelho += 1;
          }
        }
      });

      console.log(chalk.bgWhite.black("RESULTADO:"));
      console.log(chalk.bgGreen(`Verde: ${verde}`));
      console.log(chalk.bgBlue(`Azul: ${azul}`));
      console.log(chalk.bgYellow(`Amarelo: ${amarelo}`));
      console.log(chalk.bgRed(`Vermelho: ${vermelho}`));
    }
  });
}

gerarSequenciaDeCores();

setTimeout(() => {
  console.clear();
  resultado();
}, 5000);
