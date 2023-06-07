import { test, expect, describe } from "@jest/globals";

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
describe("Funcion Test", () => {

  // Llamar a la función que se va a probar
  tiros();

  test("El Primer Tiro arroja un numero mayor o igual a 0", () => {
    for (let i = 0; i < 10; i++) {
      expect(tiro1[i]).toBeGreaterThanOrEqual(0);
    }
  });

  test("El Primer Tiro arroja un numero menor o igual a 10", () => {
    for (let i = 0; i < 10; i++) {
      expect(tiro1[i]).toBeLessThanOrEqual(10);
    }
  });

  test("El Segundo Tiro arroja un numero mayor o igual a 0", () => {
    for (let i = 0; i < 10; i++) {
      expect(tiro2[i]).toBeGreaterThanOrEqual(0);
    }
  });

  test("El Segundo Tiro arroja un numero menor o igual a 10", () => {
    for (let i = 0; i < 10; i++) {
      expect(tiro2[i]).toBeLessThanOrEqual(10);
    }
  });

  test("La suma se realiza correctamente", () => {
    for (let i = 0; i < 10; i++) {
      expect(totalesTurnos[i]).toBe(tiro1[i] + tiro2[i]);
    }
  });

});

/*

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
*/