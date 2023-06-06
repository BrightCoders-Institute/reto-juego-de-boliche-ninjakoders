import { juegoBolos } from "./class/juegoDeBolos";

const jugar = new juegoBolos()

// Lanzamientos
jugar.registrarLanzamiento(7);
jugar.registrarLanzamiento(3); // Spare
jugar.registrarLanzamiento(7);

// Calcular la puntuacion total
const puntuacionTotal = jugar.calcularPuntuacionTotal();
console.log('Tu puntaje es: ', puntuacionTotal);