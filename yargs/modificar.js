const operaciones = require("./utils/utils.js");

let opcionesModificar = {
    id: {
        describe: "Argumento que recibe id",
        demand: true,
        alias: "i",
    },
    nombre: {
        describe: "Argumento que recibe nombre",
        demand: true,
        alias: "n",
    },
    apellido: {
        describe: "Argumento que recibe apellido",
        demand: true,
        alias: "a",
    },
    edad: {
        describe: "Argumento que recibe la edad",
        demand: true,
        alias: "e",
    },
};

const modificar = async (argumentos) => {
    try {
        let { id, nombre, apellido, edad } = argumentos;

        let respuesta = await operaciones.modificar(id, nombre, apellido, edad);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
};

let configModificar = {
    opciones: opcionesModificar,
    callback: modificar,
};

module.exports = configModificar;
