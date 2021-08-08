//********************** SALARIO PERSONAS *********************************************
const salariosCol = colombia.map(x => x.salary);

//********************** ORDENAR SALARIOS *********************************************
function comparacion(a,b){
    return a-b;
}
function ordenarArrayNum(array){
    return arrayOrdenada = array.sort(comparacion);
}

//********************** SUMA ARRAY **************************************************
function sumaElemetos(array){
    let suma = 0;
    array.forEach(x => {
        suma += x;
    });
    return suma;
}

//********************** MEDIANA SALARIOS *********************************************
const salarioPrueba = [10,500,9,30,50,90,40,50,80,8];

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
    return promedio;
}

//********************** MEDIANA TOP 10% *********************************************
function medianaTop10(array){
    ordenarArrayNum(array)
    const sliceStart = (array.length*90) / 100;
    const sliceEnd = array.length;
    console.log(sliceStart, sliceEnd);
    const top10 = array.slice(sliceStart,sliceEnd);
    console.log(top10);
    const medianaTop10 = mediana(top10);
    return medianaTop10;
}