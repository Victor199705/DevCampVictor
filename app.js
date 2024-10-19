
function calcularAlquiler(tipoAlquiler, param) {

    let importe;
    let ganancia;

    if (tipoAlquiler === 'h') {
        const horas = parseFloat(param);
        importe = horas * 99;
    } else if (tipoAlquiler === 'k') {
        const km = parseFloat(param);
        importe = 100 + (km * 10);
    } else {
        console.log('Usa "h" para horas de alquiler o "k" para kilómetros recorridos.');
        return;
    }

    ganancia = importe * 0.45;


    console.log(`Importe total: $${importe.toFixed(2)}, '&&', 'Ganancia: $${ganancia.toFixed(2)}');
  };