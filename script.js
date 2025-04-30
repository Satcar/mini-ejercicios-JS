//FUNCIONES

//TODO 1- Pide al usuario dos números. Muestra el resultado de la resta de ambos, en pantalla y/o en consola

//DECLARACION FUNCION
const restaEnteros = () => {

    //DECLARACION VARIABLES
    let a = parseInt(prompt("Introduce el primer numero"));
    let b = parseInt(prompt("Introduce el segundo numero"));
    
    //MOSTRAR RESULTADO
    alert("El resultado de la resta es: " + (a - b));
};

//LLAMAR FUNCION
restaEnteros();

//TODO 2- Pide al usuario que introduzca nombre, localidad donde vive y hobby. Que se muestre en una sola frase: "Te llamas XXX, vives en YYY, y te gusta ZZZ".

//DECLARACION FUNCION
const datosUsuario = () => {

    //DECLARACION VARIABLES
    let nombre = prompt("Introduce tu nombre");
    let localidad = prompt("Introduce tu domicilio");
    let hobby = prompt("Dime un hobby tuyo");
    
    //MOSTRAR RESULTADO
    alert(`Te llamas ${nombre}, vives en ${localidad}, y te gusta ${hobby}`);
};

//LLAMAR FUNCION
datosUsuario();

//TODO 3- Pedir el radio al usuario para calcular el área de un círculo. Buscad la fórmula para calcular la superficie del círculo y el valor de PI (con 4 decimales). 
