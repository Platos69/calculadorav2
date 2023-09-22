function calcular(metodo) {
    var value1 = document.getElementById("value1" + metodo).value;
    var value2 = document.getElementById("value2" + metodo).value;

    if (value1 == '' || value2 == '') {
        alert('[ERROR]Valor inválido')
    }

    switch(metodo) {
        case '+':
            var soma = parseInt(value1) + parseInt(value2);
            break;
        
        case '-':
            var soma = parseInt(value1) - parseInt(value2);
            break;
        
        case '*':
            var soma = parseInt(value1) * parseInt(value2);
            break;

        case '/':
            var soma = parseInt(value1) / parseInt(value2);
            break;
        }
        
    document.getElementById("resultado" + metodo).value = soma
}

function limpar(metodo) {
    document.getElementById("value1" + metodo).value = null
    document.getElementById("value2" + metodo).value = null
    document.getElementById("resultado" + metodo).value = null

}
