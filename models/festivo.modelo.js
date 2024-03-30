
var bd = require('./bd');

//constructor
const Festivo = function () { }

Festivo.listar = async function(respuesta){
    try {

        const basedatos = bd.obtenerBaseDatos();

        const Tipofestivos = await basedatos.collection('festivos')
            .find({}, {

            })
            .toArray();
        
       // res.json({Tipofestivos});
       // respuesta(null, Tipofestivos);
    } catch (error){
        console.log(error);
      } 
}   


Festivo.verificar = async function(respuesta){
    try {
        const basedatos = bd.obtenerBaseDatos();

        const Tipofestivos = await basedatos.collection('festivos')
        .find({}, {
            id: 1,
            tipo: 1,
            modoCalculo: 1,
            festivos: 1,
        })
        .toArray();

        respuesta(null, Tipofestivos);
    } catch (error){
        console.error('Error al obtener los datos de festivos', error);
    }
}


module.exports = Festivo;