export default function isPrime(num) {
  // 1. Validar que sea de tipo 'number' y que sea un número entero (descarta textos, null, decimales, etc.)
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return false;
  }

  // 2. Números menores o iguales a 1 no son primos
  if (num <= 1) {
    return false;
  }

  // 3. Algoritmo de verificación de primos
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}