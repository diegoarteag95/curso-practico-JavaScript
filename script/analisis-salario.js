//********************** SALARIO PERSONAS *********************************************
const salariosCol = colombia.map(x => x.salary);

//********************** ORDENAR SALARIOS *********************************************
function comparacion(a,b){
    return a-b;
}
function ordenarArrayNum(array){
    return arrayOrdenada = array.sort(comparacion);
}
ordenarArrayNum(salariosCol);

//********************** SUMA ARRAY **************************************************
function sumaElemetos(array){
    let suma = 0;
    array.forEach(x => {
        suma += x;
    });
    return suma;
}

//********************** MEDIANA SALARIOS *********************************************
function mediana(array){
    const mitadArray = parseInt(array.length/2);
    if(array.length % 2 == 0){
        ordenarArrayNum(array)
        const elemnto1 = array[mitadArray], elemnto2 = array[mitadArray - 1];
        const arrayElementos = [elemnto1,elemnto2];
        const sumaE = sumaElemetos(arrayElementos);
        const mediana = sumaE / 2;
        return mediana;
    }else{
        ordenarArrayNum(array)
        const mediana = array[mitadArray];
        return mediana;
    }
}

//********************** MEDIA ARITMETICA ********************************************
function promedio(array){
    const sumaParaPromedio = sumaElemetos(array);
    const promedio = sumaParaPromedio/array.length;
    return document.getElementById(`mediana`).innerHTML = `Media salarial = ${promedio}`;
}

//********************** MEDIANA TOP 10% *********************************************
function medianaTop10(array){
    ordenarArrayNum(array)
    const sliceStart = (array.length*90) / 100;
    const sliceEnd = array.length;
    const top10 = array.slice(sliceStart,sliceEnd);
    const medianaTop10 = mediana(top10);
    return document.getElementById(`top10`).innerHTML = `Media Top10 = ${medianaTop10}`;
}

//********************** ESCRIBIR EN HTML ********************************************
function dibujarLista(array){
    l = document.getElementById('valoresLista');
    array.forEach((e, index) => {
        const listaElement = document.createElement('p');
        listaElement.innerHTML = `<strong>${e.name}</strong> - <strong>$</strong>${e.salary}`;
        l.appendChild(listaElement);
    });
}
dibujarLista(colombia);