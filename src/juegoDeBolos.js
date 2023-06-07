const totalesTurnos = []; // guardamos el total de cada turno
let sumaPuntos = 0; //suma de puntaje
const puntajeFrames = []; //guardamos la suma de los tiros de cada frame
const tiro1 = []; // valor de tiro1
const tiro2 = [];// valor tiro 2

const tiros = () => {
    for (let i = 0; i < 10; i++) {
        tiro1[i] = Math.round(Math.random() * 10 );
        const numero = 10 - tiro1[i];
        tiro2[i] = Math.round(Math.random() * numero );

        totalesTurnos[i] = tiro1[i] + tiro2[i];

        const puntosTiro1 = document.getElementById(`tiro1_i${i.toString()}`);
        puntosTiro1.innerHTML = tiro1[i];
        const puntosTiro2 = document.getElementById(`tiro2_i${i.toString()}`);
        puntosTiro2.innerHTML = tiro2[i];
    }
}
