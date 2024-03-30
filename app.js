const express = require('express');
const bd = require('./models/bd');
const app = express();
app.use(express.json());
const fechas = require('./services/fechas');
require('./routes/festivo.rutas')(app);

//console.log(fechas.getStartHolyweek(2023));


bd.conectar();

//fecha = fechas.getNextMonday(fechas.addDays(fechas.getStartHolyweek()))

const port = 3029;

app.listen(port, () => {
    console.log(`This app is running on port' ${port}`)
});

