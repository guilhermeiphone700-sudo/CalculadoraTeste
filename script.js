
var valores = "";

function addVal(i) {
    valores += i;
    document.getElementById("resultados").value = valores;
}

function operation(i){
    if(i == "C"){
        valores = "";
    } else {
        valores += i; 
    }
    document.getElementById("resultados").value = valores;
}

function calculate(){
    try {
        let resultado = eval(valores);
        if (!isFinite(resultado)) {
            document.getElementById("resultados").value = "Ocorreu um erro";
            valores = "";
        } else {
            valores = String(resultado); 
            document.getElementById("resultados").value = valores;
        }
    } catch (error) {
        document.getElementById("resultados").value = "Ocorreu um erro";
        valores = ""; 
    }
}