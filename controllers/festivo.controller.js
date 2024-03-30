const { response } = require('express');
const festivo = require('../models/festivo.modelo');
const fechas = require('../services/fechas');

//metodo para obtener la lista de festivos
exports.listar = (req, res) => {
    festivo.listar((err, datos) => {
        if (err) {
            return res.status(500).send({ mensaje: 'Error obteniendo la lista de festivos' });
        }
        else {
            //devolver los registros obtenidos
            return res.send(datos);
        }
    });
}

exports.obtenerTipos = (req, res) => {
    festivo.mostrar((err, datos) => {
        if (err) {
            return res.status(500).send({ mensaje: 'Error obteniendo la lista de festivos' });
        }
        else {
            //devolver los registros obtenidos
            return res.send(datos);
        }
    });
}

exports.verificar = (req, res) => {

    festivo.verificar((err, datos) => {
        if (err) {
            return res.status(500).send({ mensaje: 'Error obteniendo la lista de festivos' });
        }
        else {
            //devolver los registros obtenidos
            return res.send(datos);
        }
    });

   // festivo.verificar((error, fecha) => {
        //const dia = fecha.getDate();
        //const mes = fecha.getMonth() + 1;
/*
        date = fechas.getNextMonday((fechas.getStartHolyweek(fecha)))
        if (date){
            return 'hasta aqui';
        }

        //const date = { year, month, day } = req.body;
        //res.json(date);

        if (!date){
            console.log('Llega hasta aqui prueba fecha incorrecta');
            return res.status(400).json({ error: 'Debe proporcionar una fecha'});
        } 
        try {
            if (fechas.checkdate(date)){

                const fechavalida = new Date(fechas.isHoliday(date));
                //const fechavalida = fechas.getNextMonday(fechas.addDays(fechas.getStartHolyweek(date), 47))
                //return fechavalida
                res.json({ fechavalida});

            } else {
                res.send("Ingrese una fecha valida") 
            }

        } catch (error) {
            res.status(500).json({ error: 'Error al validar la fecha'});
        }  */
    }