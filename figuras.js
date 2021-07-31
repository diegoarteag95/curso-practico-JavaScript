//codigo cuadrado ------------------------------------------------------------
console.group(`cuadrado`);

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function calcularPerimetroCuadrado(){
    let inputLadoCuadrado = document.getElementById(`ladoCuadrado`);
    valueLado = inputLadoCuadrado.value;
    let resultadoPerimetroCuadrado = perimetroCuadrado(valueLado);
    console.log(resultadoPerimetroCuadrado);
}

function calcularAreaCuadrado(){
    let inputLadoCuadrado = document.getElementById(`ladoCuadrado`);
    valueLado = inputLadoCuadrado.value;
    let resultadoAreaCuadrado = perimetroCuadrado(valueLado);
    console.log(resultadoAreaCuadrado);
}

console.groupEnd();

//codigo triangulo -----------------------------------------------------------
console.group(`triangulo`);
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base,altura){
    return (base*altura)/2;
}
console.groupEnd();

//codigo circulo -------------------------------------------------------------
console.group(`circulo`);
function circunferenciaCirculo(radio){
    let diametroCirculo = radio * 2;
    return diametroCirculo * Math.PI;
}
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}
console.groupEnd();
