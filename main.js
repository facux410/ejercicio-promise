// Crear un programa que lea los alumnos y arme un listado
const utils = require('./utils');

const main = () => {
  // Leer los alumnos
  // Crear el archivo de alumnos
  Promise.all(utils.readFiles())
    .then(([alumno1, alumno2, alumno3, alumno4, alumno5]) => {
      let res = '\n';
      [alumno1, alumno2, alumno3, alumno4, alumno5].forEach((file) => {
        res = res + file.toString() + '\n';
      });
      // Crear el listado
      utils.writeFiles(res);
    })
    .catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
};

main();