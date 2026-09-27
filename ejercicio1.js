import PromptSync from "prompt-sync";
const prompt = PromptSync();
function factorialPaquetes(numeroFactorial) {
    //caso base
    if (numeroFactorial === 1 || numeroFactorial === 0) {
        return 1;
    }
    //caso recursivo
    return numeroFactorial * factorialPaquetes(numeroFactorial - 1);
}
const numeroFactorial = Number(prompt("Ingrese el numero de paquetes: "));
if (!Number.isInteger(numeroFactorial) || numeroFactorial < 0) {
    console.log("¡No puedes escribir decimales!");
}
else {
    const calculoFactorial = factorialPaquetes(numeroFactorial);
    console.log(`
        ===========================================
        Total de formas de ordenar los paquetes
        ===========================================
                        Total: ${calculoFactorial}
        ===========================================
        
        `);
}
