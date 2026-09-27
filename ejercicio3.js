import PromptSync from "prompt-sync";
const prompt = PromptSync();
function crecimientoSecuencia(n) {
    //Casos Base
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return crecimientoSecuencia(n - 1) + crecimientoSecuencia(n - 2);
}
const cantidadTerminos = Number(prompt("Ingrese el numero de terminos que desea mostrar: "));
if (!Number.isInteger(cantidadTerminos) || cantidadTerminos < 0) {
    console.log("¡Error! Debe ingresar un numero entero positivo");
}
else {
    for (let i = 0; i < cantidadTerminos; i++) {
        const termino = crecimientoSecuencia(i); //Define la variable que va a contener la llamada de la función
        console.log(`Termino ${i + 1}: ${termino}`); // Imprimira el numero de vueltas junto con el numero que se ubica en cada vuelta del bucle
    }
}
