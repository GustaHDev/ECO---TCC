function start(pagina) {
    window.location.href = `${pagina}.html`;
}

const spritesPersonagem = new Image();
spritesPersonagem.src = "../imagens/area1/personagem.png";

const canvas = document.getElementById("canvas");
const contexto = canvas.getContext("2d");

//
//  PERSONAGEM
//

const personagem = {
    spriteX: 48,
    spriteY: 9,
    largura: 16,
    altura: 24,
    x: 20,
    y: 20,
    velocidade: 10,

    // ANIMAÇÃO DO PERSONAGEM
    movimentos: [
        //
        // parado
        //
        {spriteX: 48, spriteY: 9}, // parado baixo
        {spriteX: 0, spriteY: 9}, // parado direita
        {spriteX: 16, spriteY: 9}, // parado cima
        {spriteX: 32, spriteY: 9}, // parado esquerda

        //
        //correndo pra baixo
        //

        {spriteX: 288, spriteY: 72}, // correndo baixo 1
        {spriteX: 304, spriteY: 73}, // correndo baixo 2
        {spriteX: 320, spriteY: 72}, // correndo baixo 3
        {spriteX: 336, spriteY: 72}, // correndo baixo 4
        {spriteX: 352, spriteY: 73}, // correndo baixo 5
        {spriteX: 368, spriteY: 72}, // correndo baixo 6

        //
        // correndo pra direita
        //

        {spriteX: 0, spriteY: 73}, // correndo direita 1
        {spriteX: 16, spriteY: 72}, // correndo direita 2
        {spriteX: 32, spriteY: 73}, // correndo direita 3
        {spriteX: 48, spriteY: 73}, // correndo direita 4
        {spriteX: 64, spriteY: 72}, // correndo direita 5
        {spriteX: 80, spriteY: 73}, // correndo direita 6

        //
        // correndo pra cima
        //

        {spriteX: 96, spriteY: 73}, // correndo cima 1
        {spriteX: 112, spriteY: 72}, // correndo cima 2
        {spriteX: 128, spriteY: 73}, // correndo cima 3
        {spriteX: 144, spriteY: 73}, // correndo cima 4
        {spriteX: 160, spriteY: 72}, // correndo cima 5
        {spriteX: 176, spriteY: 73}, // correndo cima 6

        //
        // correndo pra esquerda
        //

        {spriteX: 192, spriteY: 73}, // correndo esquerda 1
        {spriteX: 208, spriteY: 72}, // correndo esquerda 2
        {spriteX: 224, spriteY: 73}, // correndo esquerda 3
        {spriteX: 240, spriteY: 73}, // correndo esquerda 4
        {spriteX: 256, spriteY: 72}, // correndo esquerda 5
        {spriteX: 272, spriteY: 73}, // correndo esquerda 6
    ],
    desenha() {
        contexto.drawImage(
            spritesPersonagem,
            personagem.spriteX, personagem.spriteY,
            personagem.largura, personagem.altura,
            personagem.x, personagem.y,
            personagem.largura, personagem.altura
        )
    },

    // FUNÇÃO PRA MOVER
    up() {
        personagem.y = personagem.y - personagem.velocidade;
        return personagem.y
      },
    down() {
        personagem.y = personagem.y + personagem.velocidade;
        return personagem.y
      },
    left() {
        personagem.x = personagem.x - personagem.velocidade;
        return personagem.x
      },
    right() {
        personagem.x = personagem.x + personagem.velocidade;
        return personagem.x
      },
    move(){
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
          case 'ArrowUp':
            personagem.up();
            break;
          case 'ArrowDown':
            personagem.down();
            break;
          case 'ArrowLeft':
            personagem.left()
            break;
          case 'ArrowRight':
            personagem.right()
            break;
        }
      })
    }
}


//
//  TELAS
//

const telas = {
    jogo: {
        desenha() {
            personagem.desenha()
        },
        atualiza(){
            personagem.move()
        }
    }
}



function loop() {
    telas.jogo.desenha();
    telas.jogo.atualiza()

    requestAnimationFrame(loop);
};


loop();

// var lixo1 = document.getElementById('lixo1')
// var lixo2 = document.getElementById('lixo2')
// var lixo3 = document.getElementById('lixo3')

// var lixos = [
// lixo1 = {
//     x: lixo1.left,
//     y: lixo1.top,
//     width: lixo1.width,
//     height: lixo1.height
// },

// lixo2 = {
//     x: lixo2.left,
//     y: lixo2.top,
//     width: lixo2.width,
//     height: lixo2.height
// },

// lixo3 = {
//     x: lixo3.left,
//     y: lixo3.top,
//     width: lixo3.width,
//     height: lixo3.height
// }
// ]

// var personagem = {
//     x: 150,
//     y: 150,
//     velocidade: 10,
//     width: document.getElementById('personagem').style.width,
//     height: document.getElementById('personagem').style.height
// }

// document.addEventListener('keydown', (event) => {
//     switch (event.key) {
//         case 'ArrowUp':
//             personagem.y -= personagem.velocidade;
//             document.getElementById('personagem').src = '../imagens/area1/personagem/CorrendoCima.png';
//             document.addEventListener('keyup', () =>{
//                 document.getElementById('personagem').src = '../imagens/area1/personagem/personagemCima.png'
//             })
//             checaPosicao()
//             break;
//         case 'ArrowDown':
//             personagem.y += personagem.velocidade;
//             document.getElementById('personagem').src = '../imagens/area1/personagem/CorrendoBaixo.gif';
//             document.addEventListener('keyup', () =>{
//                 document.getElementById('personagem').src = '../imagens/area1/personagem/personagemBaixo.png'
//             })
//             checaPosicao()
//             break;
//         case 'ArrowLeft':
//             personagem.x -= personagem.velocidade;
//             document.getElementById('personagem').src = '../imagens/area1/personagem/CorrendoEsquerda.gif';
//             document.addEventListener('keyup', () =>{
//                 document.getElementById('personagem').src = '../imagens/area1/personagem/personagemLE.png'
//             })
//             checaPosicao()
//             break;
//         case 'ArrowRight':
//             personagem.x += personagem.velocidade;
//             document.getElementById('personagem').src = '../imagens/area1/personagem/CorrendoDireita.gif';
//             document.addEventListener('keyup', () =>{
//                 document.getElementById('personagem').src = '../imagens/area1/personagem/personagemLD.png'
//             })
//             checaPosicao()
//             break;
//     }

//     document.getElementById('personagem').style.left = personagem.x + 'px';
//     document.getElementById('personagem').style.top = personagem.y + 'px';
// });

// function checaPosicao() {
//       if (personagem.x + personagem.width >= lixos[0,1,2].x &&
//           personagem.x <= lixos[0,1,2].x + lixos[0,1,2].width &&
//           personagem.y + personagem.height >= lixos[0,1,2].y &&
//           personagem.y <= lixos[0,1,2].y + lixos[0,1,2].height)
//           {
//             lixos[0,1,2].removeAttribute("src");
//           }
//     }