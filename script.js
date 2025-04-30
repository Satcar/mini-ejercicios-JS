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


//TODO 3- Pedir el radio al usuario para calcular el área de un círculo. Buscad la fórmula para calcular la superficie del círculo y el valor de PI (con 4 decimales). 

const calcularRadio = () => {

    //DECLARACION CONSTANTES Y VARIABLES
    const PI = 3.1415;
    let radio = prompt("Introduce el radio del area que desees calcular");

    //LOGICA:: FORMULA AREA: PI x RADIO^2
    let area = parseInt(PI * radio ** 2); //el operador ** equivale a "elevado a". Muestro el resultado aproximado en un valor entero para que no ocupe tanto espacio

    //MOSTRAR RESULTADO
    alert(`El área de un círculo con radio ${radio} es: ${area}`);

};

//LLAMAR FUNCIONES
restaEnteros();
datosUsuario();
calcularRadio();