

function cronometro(numeroInicial){
    console.log(numeroInicial)
    let proximoNumero = numeroInicial - 1
    if (proximoNumero > 0){
        cronometro(proximoNumero)
    }
}              

cronometro(100)