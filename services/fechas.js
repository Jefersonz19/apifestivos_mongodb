const Festivo = require("../models/festivo.modelo");

// Constructor
const Fechas = function (){

}

              // Métodos para el cálculo de festivos
// Para obtener la fecha de inicio de semana santa

Fechas.getStartHolyweek = function(year){
    A = year % 19;
    B = year % 4;
    C = year % 7;
    D = (19* A + 24) % 30;
    days = D + ((2*B) + (4*C) + (6*D) + 5) % 7;
    day = 15 + days;
    month = 3;

    if (day > 31){
        day = day - 31;
        month = 4;
    }

    return new Date(year, month -1, day);
}

// Para agregar un determinado N° de días
Fechas.addDays = function(date, days){
    //obtener fecha del festivo
    const newDate = new Date(date.getTime() + days*24*60*60*1000);
    return newDate;
}

// Para obtener la fecha del siguiente Lunes
Fechas.getNextMonday = function(date){
    // Obtener el día de la fecha dada
    const Weekday = date.getDay();
    // Calcular los días restantes para el siguiente Lunes
    const residualDays = (8 - Weekday) % 7;
    // Obtener el festivo
    const holidayMonday = Fechas.addDays(date, residualDays);

    return holidayMonday;

}

// Para validar si es una fecha valida
Fechas.checkdate = async function(req, res) {
    try {
        const {year, month, day} = req.params;

        const fecha = new Date(year, month -1, day);
        if (!isNaN(fecha)  || (fecha.getMonth() + 1 !== parseInt(month)) || (fecha.getDate() !== parseInt(day)))
        {
          return  res.status(400).json({ error: 'Fecha ingresada No válida'});
        }
    } catch (error){
        console.log(error, 'unable to check date');
    }
}

Fechas.calculateHolidays = function(festivos, year){

    if(festivos != null){
        const pascua = new Date(getStartHolyweek(year));

        switch(Festivo.getTipo){
            case 1:
                fecha = fechas.getNextMonday(fechas.addDays(fechas.getStartHolyweek()));
            case 2:
                fecha = fechas.addDays(pascua, fechas.getDate());
        }
    }

}


Fechas.isHoliday = function(festivos, year) {
    if (festivos != null) {
        const fechas = calculateHolidays(festivos, year.getTime());
    } return fechas;
}

module.exports = Fechas;