// fs.readFile NO USAR Sync (bloqueante)
// Promise.All
const {
  promises: { readFile, writeFile },
} = require('fs');
const path = require('path');

const readFiles = () => {
  const newPath = path.join(__dirname, '../');
  const promiseArray = [];
  for (let i = 1; i <= 5; i++) {
    promiseArray.push(readFile(`${newPath}/alumnos/alumno${i}.json`));
  }
  return promiseArray;
};

const writeFiles = (listado) => {
  writeFile('listado.txt', listado)
    .then((data) => {
      console.log('File written successfully\n');
      console.log('The written has the following contents:');
      console.log(
        readFile('listado.txt').then((data) => console.log(data.toString()))
      );
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = { readFiles, writeFiles };