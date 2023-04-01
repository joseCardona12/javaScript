//Palabra reservada: Comparar los
    //números más grandes 
    //Infinity siempre va estar por encima
    //A los numeros ingresados

//Ejercicio 1
const obtnerNumeroMenor = (numeros) =>{

    let menor = 88;

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] <= menor){
            menor = numeros[i];
        }
    }

    return(menor);
}

console.log(obtnerNumeroMenor([2,5,6,9,55,44,1]));

//Ejercicio 2

const sumar = (numeroSuma) =>{
    let result = '';
    for(let i = 0; i < numeroSuma.length; i++){
        result = parseInt(result + numeroSuma[i]);
    }

    return result;
}

console.log(sumar([5,77,99,6,2,33]));

//Ejercicio 2 - Manera personal

const sumar01 = (numeroSuma01) =>{
    let result = null;
    for(let i=0; i < numeroSuma01.length; i++){
        result = (result + numeroSuma01[i]);
    }

    return result;
}

console.log("El valor de la suma entre los carácteres es: "
            + sumar01([5,77,99,6,2,33]));

//Ejercicio 3
const contieneIndice = (numero, array) =>{
    for(let i = 0; i < array.length; i++){
        if(array[i] === numero){
            return true;
        }
    }

    return false ;
}

console.log(contieneIndice(3,[5,77,99,6,2,33])); // false
console.log(contieneIndice(5,[5,77,99,6,2,33])); // true

//Ejercicio 4

const invertirCaso = (string)=>{
    let result = '';

    for(let i = 0; i < string.length; i++){
        let caracter = string[i];

        if(caracter === caracter.toUpperCase()){
            result += caracter.toLowerCase();
        }else{
            result += caracter.toUpperCase();
        }
    }

    return result;
}

console.log("El nuevo texto es: " + invertirCaso("cardONA"));

//Ejercicio 5

const gano = (tragamonedas) =>{
    let jugada = tragamonedas.slice(0.5);
    if(tragamonedas[0] === tragamonedas[1] && tragamonedas[1] === tragamonedas[2]
    && tragamonedas[2] === tragamonedas[3] && tragamonedas[3] === tragamonedas[4]){
        return true;
    }

    return false;
}

console.log(gano(["💫","💫","💫","💫","💫"])); //true
console.log(gano(["⭐️","⭐️","⭐️","💫","⭐️"])); //false

//Ejercicio 6
const estarJuntos = (personajes) =>{
    let frodo = personajes.indexOf('Frodo');
    let san = personajes.indexOf('San');
    if(san - frodo === 1 || san - frodo === -1){
        return true
    }

    return false
} 

console.log(estarJuntos(["San", "Frodo", "Jose"])); //true
console.log(estarJuntos(["San", "Jose", "Frodo"])); //false