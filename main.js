function calcularPrecioFlete(distancia, peso) {
    if (isNaN(distancia) || isNaN(peso)) {

    return "Por favor, ingrese valores numéricos válidos.";
    }
    const precioPorKilometro = 150;
    
    return distancia * precioPorKilometro * peso;
}
function simuladorPrecioFlete() {
    var numPaquetes;
    do {
        numPaquetes = parseInt(prompt("Ingrese la cantidad de paquetes:"));
        if (isNaN(numPaquetes) || numPaquetes < 1) {
        alert("Por favor, ingrese un número válido de paquetes.");
        }
    } while (isNaN(numPaquetes) || numPaquetes < 1);
    var precioTotal = 0;

    for (var i = 1; i <= numPaquetes; i++) {
        var distancia = parseFloat(prompt(`Paquete ${i}: Ingrese la distancia en kilómetros:`));
        var peso = parseFloat(prompt(`Paquete ${i}: Ingrese el peso en kilos:`));
        var precioFlete = calcularPrecioFlete(distancia, peso);
        precioTotal += precioFlete;
    }
    alert(`El precio total de los ${numPaquetes} paquetes es: $${precioTotal.toFixed(2)}`);
}

simuladorPrecioFlete();