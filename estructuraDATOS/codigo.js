function obtenerNumeroMenor(numeros){

    //Palabra reservada: Comparar los
    //números más grandes 
    //Infinity siempre va estar por encima
    //A los numeros ingresados
    let menor = Infinity;

    for(let i=0; i <numeros.length; i++){

        if(numeros[i] <= menor){    
            menor = numeros[i];
        }

        
    }

    return(menor);
    //Resultado 2

}
console.log(obtenerNumeroMenor([5,77,99,6,2,33]));

function sumar(numeroSuma){
    let resultado = "";
    for(let i=0; i<numeroSuma.length; i++){
        resultado = parseInt(resultado + numeroSuma[i])
    }

    return resultado;
    //Resultado 222
}

console.log(sumar([5,77,99,6,2,33]));

//Ejercicio 3
const contieneIndice = (numero, arrayS)=>{

    for(let i=0; i<arrayS.length; i++){
        if(arrayS[i] === numero){
            return true;
        }
    }

    return false;

}
console.log(contieneIndice(3,[5,77,99,6,2,33])); // false
console.log(contieneIndice(5,[5,77,99,6,2,33])); // true

//Ejercicio 4
const invertirCaso = (string)=>{
    let result = '';
    for(let i=0; i <string.length; i++){
        let char = string[i];
        if(char === char.toUpperCase()){
            result +=char.toLowerCase();
        }else{
            result += char.toUpperCase();
        }
    }

    return(result);
  //split

}

console.log(invertirCaso("Cardona"));


//Ejecicio 5;

const gano = (tragamonedas)=>{

    if(tragamonedas.length < 5){
        return false;
    }

    for(let i = 1; i < 5; i++){
        if(tragamonedas[i] !== tragamonedas[0]){
            return false;
        }
    }

    return true;

}

console.log(gano(["💫","💫","💫","💫","💫"])); //true
console.log(gano(["⭐️","⭐️","⭐️","💫","⭐️"])); //false
console.log("Hola");


//Ejercicio 5
const gano01 = (tragamonedas01) =>{
    const jugada = tragamonedas01.slice(0.5);

}

//Ejercicio 6

const estarJuntos = (personajes) =>{
    const frodo = personajes.indexOf('Frodo'); //Buscas por nombre indexof
    const san = personajes.indexOf('San');
    return san - frodo === 1 || san - frodo === -1;
}

console.log(estarJuntos(['San', 'Frodo', 'Legolas']))//true;
console.log(estarJuntos(['San', 'Legolas', 'Frodo']))//false;
