import { test, expect } from "@jest/globals";

// Importar las funciones que deseas probar
import {
  tiro1,
  tiro2,
  tiros,
  puntajeFrames,
  sumaTotales,
  totalesTurnos,
} from "../juegoDeBolos";

// Prueba para la función tiros
test("la función tiros genera los tiros correctamente", () => {
  // Llamar a la función que se va a probar
  tiros();

  // Realizar las aserciones para verificar los resultados esperados
  for (let i = 0; i < 10; i++) {
    expect(tiro1[i]).toBeGreaterThanOrEqual(0);
    expect(tiro1[i]).toBeLessThanOrEqual(10);
    expect(tiro2[i]).toBeGreaterThanOrEqual(0);
    expect(tiro2[i]).toBeLessThanOrEqual(10);
    expect(totalesTurnos[i]).toBe(tiro1[i] + tiro2[i]);
    // Aquí puedes realizar más aserciones si es necesario
  }
});

// Prueba para la función sumaTotales
test("la función sumaTotales calcula correctamente el puntaje", () => {
  // Configurar el estado necesario para la prueba
  tiro1[0] = 10;
  tiro2[0] = 0;
  // Configurar otros valores necesarios para la prueba

  // Llamar a la función que se va a probar
  sumaTotales();

  // Realizar las aserciones para verificar los resultados esperados
  expect(puntajeFrames[0]).toBe(10); // Ajusta el valor esperado según tu lógica
  // Aquí puedes realizar más aserciones si es necesario
});
