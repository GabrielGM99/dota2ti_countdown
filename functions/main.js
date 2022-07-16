const c_dia = document.querySelector('#count_dia');//document.getElementById('count_dia');
const c_horas = document.getElementById('count_horas');
const c_minutos = document.getElementById('count_minutos');
const c_segundos = document.getElementById('count_segundos');

var el = document.getElementById("dia_label");

console.log(el)

const targetDate = "10/08/2022"

function contagem(){

    const DtInicio = new Date(targetDate)
    const DtAtual = new Date()

    const totalsegundos = (DtInicio - DtAtual) / 1000;

    console.log(totalsegundos)

    const dia = Math.floor(totalsegundos / 3600 / 24);
    const hr = Math.floor(totalsegundos / 3600) % 24;
    const min = Math.floor(totalsegundos / 60) % 60;
    const sec = Math.floor(totalsegundos) % 60;

    console.log(c_dia)

    c_dia.innerText = dia;
    c_horas.innerText = formatDatetime(hr);
    c_minutos.innerText = formatDatetime(min);
    c_segundos.innerText = formatDatetime(sec);

}

function formatDatetime(time){
    return time < 10 ? `0${time}`:time
}

contagem();

setInterval(contagem,1000);