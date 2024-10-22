
function calcularImporte(tipoAlquiler, parametrosAlquiler) {
    if (tipoAlquiler === 'h') {
        const costoPorHora = 99;
        return parametrosAlquiler * costoPorHora;
    } else if (tipoAlquiler === 'k') {
        const costoBase = 100;
        const costoPorKilometro = 10;
        return costoBase + (parametrosAlquiler * costoPorKilometro);
    } else {
        throw new Error('Tipo de alquiler no válido. Use "h" para horas o "k" para kilómetros.');
    }
}

function calcularGanancia(importe) {
    return importe * 0.45;
}

function manejarEntradaSalida() {
    const tipoAlquiler = process.argv[2];
    const parametrosAlquiler = parseFloat(process.argv[3]);

    try {
        const importe = calcularImporte(tipoAlquiler, parametrosAlquiler);
        const ganancia = calcularGanancia(importe);

        console.log(`importe:${importe.toFixed(2)} & ganancia:${ganancia.toFixed(2)}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

manejarEntradaSalida();
