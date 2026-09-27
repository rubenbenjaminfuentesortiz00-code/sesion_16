function calcularAhorro(dias: number): number {
  // Caso base
  if (dias === 0) {
    return 0;
  }

  // Caso recursivo
  return dias + calcularAhorro(dias - 1);
}

const dias: number = 5;

if (!Number.isInteger(dias) || dias < 0) { 
console.log( "La cantidad de días debe ser un número entero no negativo." );
} else { 
const ahorro: number = calcularAhorro(dias); 

console.log( `En ${dias} días se ahorrarán $${ahorro.toFixed(2)}.` ); 
}