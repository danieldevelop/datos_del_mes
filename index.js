const calendar = require('./calendario2024');

try {
    const numeroDeMes = process.argv[2];
    // El array comienza en 0, por eso restamos 1 obteniendo la posición del mes en el array
    const posicion = numeroDeMes - 1; 

    const infoDelMes = calendar.calendario2024[posicion];

    // Mostramos la información del mes
    console.log(`Numero del mes: ${numeroDeMes}`);
    console.log(`Nombre del mes: ${infoDelMes.nombreDelMes}`);
    console.log(`Cantidad de días: ${infoDelMes.cantidadDeDais}`);
    console.log(`Evento del mes: ${infoDelMes.eventoDelMes}`);

} catch (error) {
    console.log(`Error: ${error.message}`);
}