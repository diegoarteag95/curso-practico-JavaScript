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
    alert(`El PERIMETRO de tu 🟧 es de: ${resultadoPerimetroCuadrado} cm`);
}

function calcularAreaCuadrado(){
    let inputLadoCuadrado = document.getElementById(`ladoCuadrado`);
    valueLado = inputLadoCuadrado.value;
    let resultadoAreaCuadrado = areaCuadrado(valueLado);
    alert(`El AREA de tu 🟧 es de ${resultadoAreaCuadrado} cm`);
}

console.groupEnd();

//codigo triangulo -----------------------------------------------------------
console.group(`triangulo`);
function perimetroTriangulo(ladoA,ladoB,base){
    return ladoA + ladoB + base;
}
function areaTriangulo(base,altura){
    return (base*altura)/2;
}

function calcularPerimetroTriangulo (){
    let inputladoAT = document.getElementById(`ladoATringulo`);
    let valorInputAT = Number(inputladoAT.value);
    let inputladoBT = document.getElementById(`ladoBTringulo`);
    let valorInputBT = Number(inputladoBT.value);
    let inputBase = document.getElementById(`baseTringulo`);
    let valorIBase = Number(inputBase.value);

    let resultadoPerimetroTriangulo = perimetroTriangulo(valorInputAT, valorInputBT, valorIBase);
    alert(`El PERIMETRO de tu 🔺 es de: ${resultadoPerimetroTriangulo} cm`);
    console.log(resultadoPerimetroTriangulo);
}

function calcularAreaTriangulo(){
    let inputBase = document.getElementById(`baseTringulo`);
    let valorIBase = Number(inputBase.value);
    let inputAltura = document.getElementById(`alturaTringulo`);
    let valorIAltura = Number(inputAltura.value);
    let resultadoAreaTriangulo = areaTriangulo(valorIBase,valorIAltura);
    alert(`El AREA de tu 🔺 es de: ${resultadoAreaTriangulo} cm`);
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

function calcularPerimetroCirculo(){
    let inputRadio = document.getElementById(`radioCirculo`);
    let valorIR = inputRadio.value;
    let resultadoPerimetroCirculo =  circunferenciaCirculo(valorIR);
    alert(`El PERIMETRO de tu 🔵 es: ${resultadoPerimetroCirculo} cm`);
}
function calcularAreaCirculo(){
    let inputRadio = document.getElementById(`radioCirculo`);
    let valorIR = inputRadio.value;
    let resultadoAreaCirculo = areaCirculo(valorIR);
    alert(`El AREA de tu 🔵 es: ${resultadoAreaCirculo} cm`);
}

console.groupEnd();