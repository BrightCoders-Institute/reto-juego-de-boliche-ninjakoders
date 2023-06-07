export const totalesTurnos = []; // guardamos el total de cada turno
export let sumaPuntos = 0; //suma de puntaje
export const puntajeFrames = []; //guardamos la suma de los tiros de cada frame
export const tiro1 = []; // valor de tiro1
export const tiro2 = []; // valor tiro 2

export const tiros = () => {
  for (let i = 0; i < 10; i++) {
    tiro1[i] = Math.round(Math.random() * 10);
    const numero = 10 - tiro1[i];
    tiro2[i] = Math.round(Math.random() * numero);

    totalesTurnos[i] = tiro1[i] + tiro2[i];

    // const puntosTiro1 = document.getElementById(`tiro1_i${i.toString()}`);
    // puntosTiro1.innerHTML = tiro1[i];
    // const puntosTiro2 = document.getElementById(`tiro2_i${i.toString()}`);
    // puntosTiro2.innerHTML = tiro2[i];
  }
};

export const sumaTotales = () => {
  let sumaPuntos = 0;

  for (let i = 0; i < 10; i++) {
    // Calcular los puntajes para los primeros nueve frames
    if (tiro1[i] === 10) {
      sumaPuntos += totalesTurnos[i] + totalesTurnos[i + 1];
    } else if (totalesTurnos[i] === 10) {
      sumaPuntos += totalesTurnos[i] + tiro1[i + 1];
    } else {
      sumaPuntos += totalesTurnos[i];
    }

    puntajeFrames[i] = sumaPuntos;
  }

  // Calcular el puntaje adicional para el décimo frame
  if (tiro1[9] === 10 || totalesTurnos[9] === 10) {
    const tiroExtra = Math.round(Math.random() * 10);
    sumaPuntos += tiroExtra;
  }

  puntajeFrames[9] = sumaPuntos;
};

tiros();
sumaTotales();
<<<<<<< HEAD
=======

const jugar = () => {
  location.reload();
}
>>>>>>> 06e4cc3e6123159e1aca411ca91d8f25616f477f
