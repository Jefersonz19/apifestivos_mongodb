module.exports = (app) => {
    //Importar el controlador
    const controlFestivo = require('../controllers/festivo.controller');
    const { check } = require('express-validator');

    app.get("/festivos/listar", controlFestivo.listar);

    app.get("/festivos/mostrar", controlFestivo.obtenerTipos);

    app.get('/festivos/verificar', async (req, res) => { 
           try { 
           const {fecha} = req.query;

           if(!fecha){
                return res.status(400).json({ error: 'Se requiere proporcionar una fecha.' });
            }

            const resultado = await controlFestivo.verificar(new Date(fecha));
            res.json({ resultado });

         } catch (error) {
            console.error('Error al procesar la solicitud:', error);
            res.status(500).json({ error: 'Ocurrió un error al procesar la solicitud.' });
          }

    });

    app.get('/festivos/verificar/:year/:month/:day', [
        check('year').isInt(),
        check('month').isInt(),
        check('day').isInt(),
    ], controlFestivo.verificar);

}