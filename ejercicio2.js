import PromptSync from "prompt-sync";
const prompt = PromptSync();
function ahorroDias(dias) {
    //caso base
    if (dias === 0) {
        return 0;
    }
    return dias + ahorroDias(dias - 1);
}
const numeroDias = Number(prompt("Ingrese el numero de días en los que ahorro: "));
if (!Number.isInteger(numeroDias) || numeroDias < 0) {
    console.log(`
        Ingresaste ${numeroDias}
        ¡No puedes ingresar numeros decimales!
        `);
}
else {
    const calculoAhorro = ahorroDias(numeroDias); //numeroDias es la variable en la que se guarda el dato ingresado por el usuario
    console.log(`
        ==================================================
                Total de Ahorro en ${numeroDias} dias
        ==================================================
                Total acumulado en el ahorro: ${calculoAhorro}
        ==================================================
        `);
}
