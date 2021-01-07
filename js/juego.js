let puntuacion = 0;
let contadortiradas = 0;
let valor;
let txtresultado = document.getElementById('resultado');
let txtpuntuacion = document.getElementById('puntuacion');
let txttiradas = document.getElementById('numtirada');
let valores = [];

function clickCard(aux) {
    let img;
    switch (aux) {
        case 'carta1':
            img = document.getElementById('img1');
            img.setAttribute('src', 'img/cuatrojpg.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
        case 'carta5':
            img = document.getElementById('img5');
            img.setAttribute('src', 'img/cuatrojpg.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
        case 'carta2':
            img = document.getElementById('img2');
            img.setAttribute('src', 'img/rey.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
        case 'carta3':
            img = document.getElementById('img3');
            img.setAttribute('src', 'img/siete.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
        case 'carta6':
            img = document.getElementById('img6');
            img.setAttribute('src', 'img/rey.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
        case 'carta4':
            img = document.getElementById('img4');
            img.setAttribute('src', 'img/siete.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
    }

    if (valores.length >= 2) {
        if ((valores[0] == 'carta3' && valores[1] == 'carta4') || (valores[0] == 'carta4' && valores[1] == 'carta3')) {
            txtresultado.innerHTML = 'Resultado: Pareja Conseguida!';
            puntuacion++;
            txtpuntuacion.innerHTML = 'Puntuación: ' + puntuacion;
        } else if((valores[0] == 'carta1' && valores[1] == 'carta5') || (valores[0] == 'carta5' && valores[1] == 'carta1')) {

        } else if ((valores[0] == 'carta2' && valores[1] == 'carta6') || (valores[0] == 'carta6' && valores[1] == 'carta2')) {

        } else {
            txtresultado.innerHTML = 'Resultado: No ha habido suerte';
            puntuacion--;
            txtpuntuacion.innerHTML = 'Puntuación: ' + puntuacion;
            // reset();
        }
    }

}

function reset() {
    location.href = '../juego.html';
}