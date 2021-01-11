let puntuacion = 0;
let contadortiradas = 0;
let valor;
let txtresultado = document.getElementById('resultado');
let txtpuntuacion = document.getElementById('puntuacion');
let txttiradas = document.getElementById('numtirada');
let valores = [];
let acertadas = 0;

function clickCard(aux) {
    let img;
    switch (aux) {
        case 'img1':
            img = document.getElementById('img1');
            img.setAttribute('src', 'img/cuatrojpg.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
        case 'img5':
            img = document.getElementById('img5');
            img.setAttribute('src', 'img/cuatrojpg.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
        case 'img2':
            img = document.getElementById('img2');
            img.setAttribute('src', 'img/rey.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
        case 'img3':
            img = document.getElementById('img3');
            img.setAttribute('src', 'img/siete.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
        case 'img6':
            img = document.getElementById('img6');
            img.setAttribute('src', 'img/rey.jpg');
            valor = aux;
            console.log(valor);
            contadortiradas++;
            txttiradas.innerHTML = 'Número de tiradas: ' + contadortiradas;
            valores.push(valor);
            break;
        case 'img4':
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
        let carta1 = document.getElementById(valores[0]);
        let carta2 = document.getElementById(valores[1]);
        let src1 = carta1.getAttribute('src');
        let src2 = carta2.getAttribute('src');
        console.log(src1 + ' ' + src2);
        if (src1 == src2) {
            txtresultado.innerHTML = 'Resultado: Pareja Conseguida!';
            puntuacion++;
            txtpuntuacion.innerHTML = 'Puntuación: ' + puntuacion;
            console.log('valores antes del reeet: ' + valores);
            valores = [];
            console.log('valores despues del reeet: ' + valores);
            acertadas++;

        } else {
            txtresultado.innerHTML = 'Resultado: No ha habido suerte';
            puntuacion--;
            txtpuntuacion.innerHTML = 'Puntuación: ' + puntuacion;
            setTimeout(() => { turnCard() }, 1500);
        }
        evaluate(acertadas);
    }
    
    

}

function evaluate(acertadas) {
    if (acertadas == 3) {
        setTimeout(() => {},1000);
        alert('Has ganado');
        setTimeout(() => {document.location.reload(true)}, 1000);
    }
}

function turnCard() {
    let carta1 = document.getElementById(valores[0]);
    let carta2 = document.getElementById(valores[1]);
    carta1.setAttribute('src', 'img/tras.jpg');
    carta2.setAttribute('src', 'img/tras.jpg');
    valores = [];
}