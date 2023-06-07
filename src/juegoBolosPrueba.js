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

const sumaTotales = () => {
    //strike
    for (let i = 0; i < 10; i++) {
        if (tiro1[i] === 10){
            sumaPuntos = sumaPuntos + totalesTurnos[i] + totalesTurnos[i + 1];
            puntajeFrames[i] = sumaPuntos;
            console.log(puntajeFrames[i]);
        }
        //spare
        else if (totalesTurnos[i] === 10 ){
            sumaPuntos = sumaPuntos + totalesTurnos[i] + tiro1[ i + 1 ];
            puntajeFrames[i] = sumaPuntos;
            console.log(puntajeFrames[i]);
        } //tiro normal
        else {
            sumaPuntos += totalesTurnos[i];
            puntajeFrames[i] = sumaPuntos;
            console.log(puntajeFrames[i])
        }
        if ( tiro1[10] === 10 || puntajeFrames[10] === 10 ){
            const tiroExtra = Math.round(Math.random() * 10);
            sumaPuntos = sumaPuntos + tiroExtra;
        }

        const puntosTotales = document.getElementById(`totales_i${i.toString()}`);
        puntosTotales.innerHTML = puntajeFrames[i];
    }
}

tiros();
sumaTotales();

const jugar = () => {
    location.reload();
}