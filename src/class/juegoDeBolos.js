export class juegoBolos {
    constructor() {
        this.puntuacionTotal = 0; // Puntuacion total del juego
        this.turnoActual = 0; // Nuevo del turno actual
        this.lanzamientos = []; // Almacenar los resultados de los lanzamientos
    }

    // Registrar el resultado de un lanzamiento
    registrarLanzamiento(pinsDerribados) {
        this.lanzamientos.push(pinsDerribados);
    }

    // Calcular la puntuacion total del juego
    calcularPuntuacionTotal() {
        let puntuacion = 0;
        let lanzamientoInicial = 0;

        for (let turno = 0; turno < 10; turno++) {
            if (this.esStrike(lanzamientoInicial)) {
                puntuacion += 10 + this.puntosSiguientesDosLanzamientos(lanzamientoIndex);
                lanzamientoIndex += 1;
            } else if (this.esSpare(lanzamientoInicial)) {
                puntuacion += 10 + this.puntosSiguienteLanzamiento(lanzamientoInicial);
                lanzamientoInicial += 2
            } else {
                puntuacion += this.puntosLanzados(lanzamientoInicial) + this.puntosSiguienteLanzamiento(lanzamientoInicial + 1);
                lanzamientoInicial += 2;
            }
        }

        this.puntuacionTotal = puntuacion;
        return puntuacion;
    }

    // Verificar si se derribaron todos los bolos en un lanzamiento (Strike)
    esStrike(lanzamientoInicial) {
        return this.lanzamientos[lanzamientoInicial] === 10;
    }

    // Verificar si se derribaron todos los lanzamientos en dos tiros consecutivos
    esSpare(lanzamientoInicial) {
        return this.lanzamientos[lanzamientoInicial] + this.lanzamientos[lanzamientoInicial + 1] === 10;
    }

    // Obetener los puntos del lanzamientos actual
    puntosLanzados(lanzamientoInicial) {
        return this.lanzamientos(lanzamientoInicial);
    }

    // Obtener los puntos del siguiente lanzamiento
    puntosSiguienteLanzamiento(lanzamientoInicial) {
        return this.lanzamientos[lanzamientoInicial];
    }

    // Obetener los puntos de los dos siguientes lanzamientos
    puntosSiguientesDosLanzamientos(lanzamientoInicial) {
        return this.lanzamientos[lanzamientoInicial] + this.lanzamientos[lanzamientoInicial + 1] + this.lanzamientos[lanzamientoInicial + 2];
    }

}
