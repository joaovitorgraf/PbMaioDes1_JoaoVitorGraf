const fs = require("fs");
const chalk = require("chalk");

module.exports = {
  criaArquivo() {
    if (fs.existsSync("./resultado.txt")) {
      return "Arquivo já esxiste";
    } else {
      fs.writeFile("resultado.txt", "", (err) => {
        if (err) {
          throw err;
        } else {
          return "Arquivo Criado com Sucesso";
        }
      });
    }
  },

  escreverNoArquivo(sequencia) {
    sequencia = sequencia + "\r\n";

    fs.appendFile("resultado.txt", sequencia, (err) => {
      if (err) {
        throw err;
      } else {
        return "Escrito com sucesso!";
      }
    });
  },

  resultado() {
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
  },
};
