function ProcesarRespuestas() {
    let Total = 5;
    let puntos= 0;

    let myform= document.forms["Formulario"];
    let respuestasCorrectas=["a","a","c","b","b"];

    for(let i=1; i<=Total; i++){
        if (myform["r"+i].value== null ||
            myform["r"+i].value== '' ) {
            alert('Favor responder todas las preguntas');
            return false;
        } else {
            if(myform["r"+i].value === respuestasCorrectas[i-1])
               puntos++;
        }
    }
    let resultado =document.getElementById('resultado')
    resultado.innerHTML= ' Obtuviste ' + puntos + ' puntos de ' + Total + ' posibles ';
}