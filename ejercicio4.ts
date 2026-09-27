import PromptSync from "prompt-sync";
const prompt = PromptSync();

function conteoCaracteres(caracteres: string): number{
    //caso base

    if(caracteres === ""){
        return 0
    }

    return 1 + conteoCaracteres(caracteres.slice(1));//Lo que hace es quitarle una letra al texto en cada vuelta
}

const contarLetras: string = prompt("Ingrese el codigo textual: ");
const total: number = conteoCaracteres(contarLetras);

console.log(`El texto ingresado contiene ${total} caracteres.`);

