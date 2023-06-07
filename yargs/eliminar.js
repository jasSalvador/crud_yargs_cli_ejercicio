const operaciones = require("./utils/utils.js");
const opcionesEliminar = {
    id: {
        describe: "Argumento que recibe el id del usuario a eliminar",
        demand: false,
        alias: "i",
    },
};


const eliminar = async (argumentos) => {
    try {
        let id = argumentos.id;
        if (id) {
            let usuario = await operaciones.eliminar(id);
            console.log(usuario);
        }
    } catch (error) {
        console.log(error);
    }
};

let configEliminar = {
    opciones: opcionesEliminar,
    callback: eliminar
};


module.exports = configEliminar;