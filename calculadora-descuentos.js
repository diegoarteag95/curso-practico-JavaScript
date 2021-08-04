//---TRAER INPUTS ---------------------------------------------------------------
const inputValorProducto = document.getElementById(`inputValorProducto`);
const inputDescuento = document.getElementById(`inputDescuento`);
const inputCupon = document.getElementById(`inputCupon`);
//---TRAER INPUTS ---------------------------------------------------------------

//---FUNCION OPERACION PARA CALCULAR DESCUENTO ----------------------------------
function calcularPrecioConDescuento(precio,descuento){
    return (precio*(100 - descuento))/100;
}
//---FUNCION OPERACION PARA CALCULAR DESCUENTO ----------------------------------

//---FUNCION BORRAR VALORES ESCRITOS EN HTML ------------------------------------
function resetearValores(){
    document.getElementById(`valorOriginal`).innerHTML = (``);
    document.getElementById(`descuentoAplicado`).innerHTML = (``);
    document.getElementById(`ahorro`).innerHTML = (``);
    document.getElementById(`total`).innerHTML = (``);
}
//---FUNCION BORRAR VALORES ESCRITOS EN HTML ------------------------------------

//---FUNCION BUTTON CALCULAR DESCUENTO ------------------------------------------
function buttonCalcularDescuento(){
    let valueInputValorProducto = inputValorProducto.value;
    let valueInputDescuento = inputDescuento.value;
    let TotalPagar = calcularPrecioConDescuento(valueInputValorProducto,valueInputDescuento );

    if (valueInputValorProducto>0){
        document.getElementById(`avisoValorProducto`).innerHTML = (``);
        if(valueInputDescuento>0 && valueInputDescuento<99){
            document.getElementById(`avisoDescuento`).innerHTML = (``);
            document.getElementById(`valorOriginal`).innerHTML = (` $${valueInputValorProducto}`);
            document.getElementById(`descuentoAplicado`).innerHTML = (` ${valueInputDescuento}%`);
            document.getElementById(`ahorro`).innerHTML = (` $${valueInputValorProducto-TotalPagar}`);
            document.getElementById(`total`).innerHTML = (` $${TotalPagar}`);
        }else{
            document.getElementById(`avisoDescuento`).innerHTML = (`Valor de descuento no valido`);
            resetearValores()
        }
    }else{
        document.getElementById(`avisoValorProducto`).innerHTML = (`Valor de producto no valido`);
        resetearValores()
    }
}
//---FUNCION BUTTON CALCULAR DESCUENTO ------------------------------------------

//---CUPONES --------------------------------------------------------------------
let cupones = [
    {
        nombre:`gatodescuento`,
        descuento: 40
    },
    {
        nombre:`batidescuento`,
        descuento: 35
    },
    {
        nombre:`superdescuento`,
        descuento: 30
    },
    {
        nombre:`descuentopadre`,
        descuento: 25
    },
    {
        nombre:`parcedescuento`,
        descuento: 20
    },
    {
        nombre:`damelopormenos`,
        descuento: 15
    }
];
//---CUPONES --------------------------------------------------------------------

//---BUSCAR CUPON VALIDO --------------------------------------------------------
function buttonCupon(){
    let valueInputValorProducto = inputValorProducto.value;
    let cuponUser = inputCupon.value;

    if(valueInputValorProducto>0){
        document.getElementById(`avisoValorProducto`).innerHTML = (``);

        if(cuponUser){
            document.getElementById(`avisoCupon`).innerHTML = (``);

            let encuentraCupon = cupones.find (function (cupon){
            return cupon.nombre === cuponUser;
            });

            if(!encuentraCupon){
                document.getElementById(`avisoCupon`).innerHTML = (`Tu cupon NO es valido`);
            }else{
                let TotalPagar = calcularPrecioConDescuento(valueInputValorProducto,encuentraCupon.descuento)
                document.getElementById(`avisoCupon`).innerHTML = (``);
                document.getElementById(`valorOriginal`).innerHTML = (` $${valueInputValorProducto}`);
                document.getElementById(`descuentoAplicado`).innerHTML = (` ${encuentraCupon.descuento}%`);
                document.getElementById(`ahorro`).innerHTML = (` $${valueInputValorProducto-TotalPagar}`);
                document.getElementById(`total`).innerHTML = (` $${TotalPagar}`);
            }
        }else{
            document.getElementById(`avisoCupon`).innerHTML = (`Ingresa Tu Cupon`);
        }
    }else{
        document.getElementById(`avisoValorProducto`).innerHTML = (`Valor de producto no valido`);
        resetearValores()
    }
}
