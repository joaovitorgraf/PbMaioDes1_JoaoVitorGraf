const fs = require("fs");
const chalk = require("chalk");

module.exports.criarArquivo = () => {
  fs.writeFile("resultado.txt", "", (err) => {
    if (err) {
      throw err;
    } else {
      return "Arquivo Criado com Sucesso";
    }
  });
};

module.exports.escreverNoArquivo = (sequencia) => {
  sequencia = sequencia + "\r\n";

  fs.appendFileSync("resultado.txt", sequencia, (err) => {
    if (err) {
      throw err;
    } else {
      return "Escrito com sucesso!";
    }
  });
};

module.exports.resultado = () => {
  const conteudo = fs.readFileSync("./resultado.txt", {
    encoding: "utf8",
    flag: "r",
  });

  const split = conteudo.split("\r\n");
  let verde = 0;
  let azul = 0;
  let amarelo = 0;
  let vermelho = 0;

  split.forEach((arr) => {
    const splitArr = arr.split(",");

    for (let i = 0; i < splitArr.length; i++) {
      if (splitArr[i].includes("verde")) {
        verde += 1;
      } else if (splitArr[i].includes("azul")) {
        azul += 1;
      } else if (splitArr[i].includes("amarelo")) {
        amarelo += 1;
      } else if (splitArr[i].includes("vermelho")) {
        vermelho += 1;
      }
    }
  });

  console.log(chalk.bgWhite("RESULTADO:"));
  console.log(chalk.bgGreen(`Verde: ${verde}`));
  console.log(chalk.bgBlue(`Azul: ${azul}`));
  console.log(chalk.bgYellow(`Amarelo: ${amarelo}`));
  console.log(chalk.bgRed(`Vermelho: ${vermelho}`));
};
