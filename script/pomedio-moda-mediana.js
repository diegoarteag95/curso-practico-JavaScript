// **************************** PROMEDIO - MEDIA ARIMETICA ----------------------------------
let lista = [];
let tamañoL = 0;
document.getElementById(`promedio`).innerHTML = `❔`
document.getElementById(`mediana`).innerHTML = `❔`
document.getElementById(`moda`).innerHTML = `❔`

// ********************************* Lista usuario -------------------------------------------
function agregarALista(){
    if(inputLista.value){
        document.getElementById(`alertaLista`).innerHTML = ``;
        const inputLista = document.getElementById(`inputLista`);
        let valueInputLista = Number(inputLista.value);
        lista.push(valueInputLista);
        document.getElementById("inputLista").value = "";
        escribirLista(lista);
        tamañoL += 1;
    }else{
        document.getElementById(`alertaLista`).innerHTML = `❌Agrega un valor valido❌`;
    }
}
// ****************************** Escribir lista HTML ----------------------------------------
function escribirLista(lista) {
    l = document.getElementById('valoresLista');
    l.innerHTML = '';

    lista.forEach((element, index) => {
        const listaElement = document.createElement('li');
        listaElement.innerHTML = `<strong>${index + 1} - </strong> ${element}`;

        l.appendChild(listaElement);
    });
}

// ****************************** BORRAR DE lista --------------------------------------------
function eliminarDeLista(){
    const inputBorrarLista = document.getElementById(`inputBorrarLista`);
    if(inputBorrarLista.value){
        document.getElementById(`alertaBorrar`).innerHTML = ``;
        let valueinputBorrarLista = Number(inputBorrarLista.value);
        lista.splice(valueinputBorrarLista - 1,1);
        document.getElementById("inputBorrarLista").value = "";
        escribirLista(lista);
        tamañoL += -1;
    }else{
        document.getElementById(`alertaBorrar`).innerHTML = `❌Valor invalido❌`;
    }
}

// ****************************** PROMEDIO ARITMETICO -----------------------------------------

//SUMAR ELEMENTOS DE LA LISTA CON UN CICLO FOR -----------------
/*function calcularMediaAritemtica(lista){
    let sumaElementosLista = 0;
    for(let i=0; i<lista.length; i++){
    sumaElementosLista = sumaElementosLista + lista[i];
    }
    let resultadoMediaAritmetica = promedioLista = sumaElementosLista/lista.length;
    return `La MEDIA ARITMETICA de tu lista es de ${resultadoMediaAritmetica}`;
}*/

//SUMAR ELEMENTOS DE LA LISTA METODO ARRAY ---------------------
function calcularMediaAritemtica(lista){
    const sumarElementosLista = lista.reduce(
        function (sumaAcumulado=0, nuevoElemento){
            return sumaAcumulado + nuevoElemento;
        }
    );
    let resultadoMediaAritmetica = sumarElementosLista/lista.length;
        return document.getElementById(`promedio`).innerHTML = `${resultadoMediaAritmetica}`
}

// ************************************* MEDIANA --------------------------------------------
function ordenarArray(){
    lista.sort((a,b)=>a-b);
}

function calcularMediana(){
    if(lista.length % 2 === 0){
        ordenarArray(lista)
        let elemento1 =  lista[parseInt(lista.length/2)];
        let elemento2 =  lista[parseInt((lista.length/2)-1)];
        let listaPar = [elemento1,elemento2];
        let resultadoMedianaPar = calcularMediaAritemtica(listaPar);
        return document.getElementById(`mediana`).innerHTML = `${resultadoMedianaPar}`
    }else{
        resultadoMediana = lista[parseInt(lista.length/2)];
        return document.getElementById(`mediana`).innerHTML = `${resultadoMediana}`
    }
}

// ************************************* MODA -----------------------------------------------

function calcularModa(){
    const listaCount = {};
    lista.map( function (elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    });
    const listaModa = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1]
        }
    );
    const moda = listaModa[listaModa.length - 1];

    return document.getElementById(`moda`).innerHTML = `${Number(moda[0])}`
}
// *********************************** RESULTADO ---------------------------------------------
function calcularResultado(){
    if(tamañoL === 0){
        
    }else{
        calcularMediana(lista);
        calcularMediaAritemtica(lista);
        calcularModa(lista);
    }
}