//Variavel para o background
let backgroundColor;

// Variavel de audio
let input;
let volume;
let threshold = 0.1;

//Informações do aluno
let identification = "Carlos Cruz | nº20016 | ECGM";

//Variaveis de fontes
let font1;

//Variavel para o canvas
let canvas;

//Variveis para butões
let buttonPauseMusic;
let buttonPlayMusic;
let buttonPlayGame;
let buttonStopSound;
let buttonPlaySound;
let buttonStartGame;
let buttonRestartGame;
let buttonPauseGame;

//variaveis de sons
let looping;
let soundBackground;
let sound1;
let sound2;

//Welcome screen
let welcome = true;
let welcomeCat = [];
let c = 0;

//Playing sreen
let playing = false; 

//GameOver screen
let gameOver = false;

//Parar o jogo
let paused = false;

//Intervalo
let breakTime = 1500;
let breakTime2 = 2500;
let breakTime3 = 8000;
let time = 0;
let time2 = 0;
let time3 = 0;

//contagem decrescente
let timer = 3;

//Variaveis das Imagens
let trackStart;
let trackEnd;
let grass;

//Variaveis nuvens
let theClouds = [];


//variaveis dos obstaculos
let theObstacles = [];
let obstacleX;

//Variveis necessárias
let text1 = 0; 
let slide = 0;
let slide2 = 0;
let slide3 = 0;
let distancy = 3300;
let notsurprisedkirk;
let teste = true;

//correr
let meters = 0;

//runner
let runners = [];
let catJumper;
let r = 0;
let catX;
let catY;        
let catW; 
let catH;
let catX0 = 30;


//preload dos media
function preload(){
    
    //Carregar fonte 1
        font1 = loadFont('media/fonts/BeVietnamPro-Medium.ttf');
        
    //Carregar som
        soundFormats('mp3','wav');

    //Carregar Imagem

        //carregar relva
            grass = loadImage("media/images/grass.png");

        //carregar track1
            trackStart = loadImage("media/images/trackStart.png");

        //carregar track2
             trackEnd = loadImage("media/images/trackEnd.png");

        //Adicionar gatos
            runners[0] = loadImage("media/images/cats/cat-22.png");
            runners[1] = loadImage("media/images/cats/cat-23.png");    
            runners[2] = loadImage("media/images/cats/cat-24.png");    
            runners[3] = loadImage("media/images/cats/cat-25.png");    
            runners[4] = loadImage("media/images/cats/cat-26.png");    
            runners[5] = loadImage("media/images/cats/cat-27.png");    
            runners[6] = loadImage("media/images/cats/cat-28.png");    
            runners[7] = loadImage("media/images/cats/cat-29.png");    
            runners[8] = loadImage("media/images/cats/cat-30.png");  
            runners[9] = loadImage("media/images/cats/cat-31.png");    
            runners[10] = loadImage("media/images/cats/cat-32.png");    
            runners[11] = loadImage("media/images/cats/cat-33.png");      

        //Adicionar Gato a welcome
            welcomeCat[0] = loadImage("media/images/cats/cat-34.png");
            welcomeCat[1] = loadImage("media/images/cats/cat-35.png");
            welcomeCat[2] = loadImage("media/images/cats/cat-36.png");
            welcomeCat[3] = loadImage("media/images/cats/cat-37.png");
            welcomeCat[4] = loadImage("media/images/cats/cat-38.png");
            welcomeCat[0] = loadImage("media/images/cats/cat-39.png");

        //cat  jumping
        catJumper = loadImage("media/images/cats/catJumping.png");

        //gameOver
        notsurprisedkirk = loadImage("media/images/notsurprisedkirk.jpg");

    //carregar som
        soundBackground = loadSound("media/sound/background.mp3");

    // crowd = loadSound("media/RHB.mp3");
    // winning = loadSound("media/winning.mp3")
    // winningcrowd = leadSound("media/winningcrowd.mp3")
}

//Setup
function setup(){

        initGame();

    //Retirar stroke da pagina
        noStroke();

    //Melhorar qualidade de imagem
        smooth();

    //definir frame rate
        frameRate(30);

    // canvas.position(200, 200);
        createCanvas(windowWidth - 15, windowHeight - 130);

    //Criar objeto para input de audio
        input = new p5.AudioIn();

    //Inicializar objeto input
        input.start();

    //butões Menu
         buttonPauseMusic = createButton('Stop Music');
         buttonPauseMusic.size(100, 30);
         buttonPauseMusic.position(width -120, height + 33);
         buttonPlayMusic = createButton('Play Music');
         buttonPlayMusic.position(windowWidth - 120, height + 33);
         buttonPlayMusic.size(100, 30);
         buttonPlayMusic.hide();
         buttonPauseMusic.mouseClicked(pausePlayMusic);
         buttonPlayMusic.mouseClicked(pausePlayMusic);
         buttonPlayGame = createButton('Play Game');
         buttonPlayGame.size(100, 30);
         buttonPlayGame.position(20, height + 33);
         buttonRestartGame = createButton('Restart Game');
         buttonRestartGame.position(140, height + 33);
         buttonRestartGame.size(100, 30);
         buttonRestartGame.attribute('disabled','');
         buttonHomeGame = createButton('Home');
         buttonHomeGame.position(260, height + 33);
         buttonHomeGame.size(100, 30);
         buttonHomeGame.attribute('disabled','');
         buttonPauseGame = createButton('Pause');
         buttonPauseGame.position(380, height + 33);
         buttonPauseGame.size(100, 30);
         buttonPauseGame.attribute('disabled','');
         buttonUnpause = createButton('continue');
         buttonUnpause.position(380, height + 33);
         buttonUnpause.size(100, 30);
         buttonUnpause.hide();

    //Para colisão
         catX = 70;
         catY = height - 210; 
    //area
         catW = 310; 
         catH = 140;

    //Tempo para mudar cor do nome
        let start = millis();
         
     
}

function   initGame(){

}
//Draw loop
function draw(){

    volume = input.getLevel();
    volume = volume*10;

  //Apresentação da identificação do aluno
    studentName();

    //Escolher o background(canvas)
    chooseCanvas();

    //Simbolo dos jogos Olimpicos
    OlimpicSymbol();

    //Bottom menu das opções
    menu();

    initClouds();
    
    if(meters <= 2700){
        initObstacles();
    }

}

function menu(){
    noStroke();
    fill(0, 0, 0, 90)
    rect(0, height - 40, width, 40);
}

//Escolher pagina do jogo
function chooseCanvas(){

    if(welcome == false && playing == true && gameOver == false && paused == false){
        
        imageMode(CORNER);
        //Defenir Background
        //Opacidade para 
        colorbackground = color(135,206,235);
        background(colorbackground);

        //Desenhar track
        image (trackStart, 0, height - 240);
   
        //desenhar relva
         image (grass, 0, height-65);

        //contagem decrescente
        textAlign(CENTER, CENTER);
        textSize(100);
        text(timer, width/2, height/2);

        //Contagem decrescente, inicia jogo
        startGame();
        
        //butões menu
        buttonPlayGame.attribute('disabled', '');
        buttonRestartGame.removeAttribute('disabled');
        buttonHomeGame.removeAttribute('disabled');
        buttonRestartGame.mouseClicked(restartGame);
        buttonHomeGame.mouseClicked(backToWelcome);
        buttonPauseMusic.removeAttribute('disabled');
        buttonPauseGame.removeAttribute('disabled');
        buttonPauseGame.mouseClicked(pauseGame);
   
    
    }else if(welcome == false && playing == false && gameOver == true && paused == false){
    
        //Definir cor de background
        //Defenir Background
        //Opacidade para 
        colorbackground = color(128,128,128, 60);
        background(colorbackground);
        time=false;

        //Texto teste
        noStroke();
        fill(255, 255, 255);
        textSize(100);
        text("You lost", width/2, height/2 - 250);
        text("Press restart to try again", width/2, height/2 -120);
        imageMode(CENTER);
        image(notsurprisedkirk, width/2, height/2 + 100)
       
        //butões menu
        buttonRestartGame.mouseClicked(restartGame);
        buttonPlayGame.attribute('disabled', '');
        buttonPauseGame.attribute('disabled', '');
        buttonRestartGame.removeAttribute('disabled');
        soundBackground.pause();

        

    }else if(welcome == false && playing == false && gameOver == false && paused == true){
       
        //Simbolo de Pausa
        noStroke();
        rectMode(CORNER);
        fill(0, 0, 0, 90);
        rect(width, height, 0, 0);

        fill(0, 0, 0, 80);
        circle(width/2, height/2, 200);

        fill(211, 211, 211);
        rectMode(CENTER);
        rect(width/2 -40, height/2, 40, 100);
        rect(width/2 + 40, height/2, 40, 100);

        rectMode(CORNER);

        //mudar butão no menu
        buttonUnpause.show();
        buttonUnpause.mouseClicked(playGame);

    }else{

       //Definir cor de background
       colorbackground = color(135,206,235);
       background(colorbackground);

       //welcome page para recepção do jogo
       noStroke();
       fill(0);
       textSize(20);
       text("You are welcome", 200, 100);
       text("The following game will put your family patience at stake", 200, 140);
       text("Enjoy", 200, 180);
       textSize(15);
       text("Rules:", 200, 210);
       text(" -Yell to jump", 200, 230); 
       text(" -You to do the 3000m mark to win the game", 200, 250);
       text(" -If you touch the bars or the puddle you DIE of shame", 200, 270);
       textSize(50);
       text("Press play Game to start", 200, 340);

        //cat();
       //butões menu
       buttonPlayGame.mousePressed(playGame);
       buttonPlayGame.removeAttribute('disabled');
       buttonRestartGame.attribute('disabled', '');
       buttonHomeGame.attribute('disabled', '');
       buttonPauseMusic.attribute('disabled', '');
    } 
}

//contagem decrescente
function startGame(){
    
        if (frameCount % 60 == 0 && timer > 0) { 

            //Contagem decrescente
            timer --;

        }
        if (timer == 0) {
            

                if(meters <= distancy){

                            //Defenir Background
                            //Opacidade para 
                            colorbackground = color(135,206,235);
                            background(colorbackground);

                            if(meters >= 1900){
                                image (trackEnd, width - slide3, height - 240);
                              

                                if(meters <= distancy){
                                    slide3 = slide3 + 5;
                                }
                            }
                            
                            if(meters >= 1100){

                                image (trackEnd, width - slide2, height - 240);
                                image (grass, width - slide2, height - 65);

                                if(meters <= distancy){
                                    slide2 = slide2 + 5;
                                }
                            }

                        //Desenhar track
                            image (trackStart, 0 - slide, height - 240);
                            
                        //Iniciar nuvens
                       
                            moveTheObstacle();
                            moveTheCloud();

                        //Chamar corredor
                            runner();

                        //desenhar relva
                            image (grass, 0 - slide, height-65);

                        //Mover Imagem
                            slide = 5 + slide;

                        //Game start
                            textAlign(CENTER, CENTER);
                            textSize(100);
                            text("Game Start", width/2 - text1, height/2);
                            text1 = text1 + 10;

                        //Texto distancia percorrida    
                            meters = meters + 2;
                            textSize(20);
                            fill(0);
                            text( "Run:" + meters + " meters", width - 85, 20);

                }else{

                            colorbackground = color(135,206,235);
                            background(colorbackground);

                            textSize(100);
                            text("you won", width/2, height/2- 30);
                            
                            textSize(50);
                            text("Restart?", width/2, height/2 + 50);

                            soundBackground.pause();
                            
                }
        }
    }

//fireworks
// function fireworks(){

// } 

//Gato a correr
function runner(){

    if(volume > threshold){

            catY = 400;

            image(catJumper, 30, height - 300);

            //rectangulo de teste
           // rect(70, height - catY, catW, catH);
 
    }else{

            catY = 210;

            if (meters > distancy - 100){

                    //Escolher imagem
                    if(r > 10){

                        //reset do loop das imagens
                        image(runners[11], catX0, height - 250);
                        catX0 = catX0 + 10;
                        r = 0;

                    }else{

                        image(runners[r], catX0, height - 250);
                        catX0 = catX0 + 20;
                        //rect(70, height - catY, catW, catH);
                        r++;

                    }
            }else{

                    //Escolher imagem
                    if(r > 10){

                        //reset do loop das imagens
                        image(runners[11], catX0, height - 250);
                        r = 0;

                    }else{

                        image(runners[r], catX0, height - 250);
                        //rect(70, height - catY, catW, catH);
                        r++;

                    }
            }
    }   
}

//Gato de boas vindas (Pequeno detalhe que não consegui ativar por falta de tempo, requer muito trabalho de imagem, desativei)
// function cat(){

//    if(millis() - c > 3000){

//         image(welcomeCat[c], 30, height - 400);
//         c = millis();

//    }
// }


//Iniciar Obsctaculos
function initObstacles(){

    if( millis() - time3 > breakTime3){

        //A cada breaktime cria novo
         time3 = millis();

         let obstacleX = 0;

         //novo obstaculo
         obstacle = new Obstacle(obstacleX);

         //pedir a classe
         theObstacles.push(obstacle);

     }
}

//Mover Obstaculos
function moveTheObstacle(){

    //verificar se tem obstaculos
    if (theObstacles.length > 0){

            //mover os obstaculos
            for( let u = 0; u < theObstacles.length; u++){

                 let theObstacle = theObstacles[u];
                theObstacle.moveObstacle();

                    //Verificar colisão
                        if (rectRect(theObstacle.x, theObstacle.y, theObstacle.w, theObstacle.h, catX, catY, catW, catH) == true) {
                            //Se colisão gameOver
                           // removeObstacle(theObstacle);
                            theGameOver();
                        }
            }
        
    }
}

//iniciar Nuvens
function initClouds(){

    if( millis() - time2 > breakTime2){

        time2= millis();
         let cloudX = 0;
         let cloudY = random(10, 150);

         cloud = new Cloud(cloudX, cloudY);
         theClouds.push(cloud);
     }
 }

//Game Over
function theGameOver(){
    welcome = false;
    playing = false;
    gameOver = true;
    paused = false;
}

//criar nuvens
function moveTheCloud(){

    if (theClouds.length > 0){

        for( let j = 0; j < theClouds.length; j++){
           let theCloud = theClouds[j];
            theCloud.moveCloud();
        }
    }
}

//Apagar quaisquer valores guardados nos arrays
/*function deleteClouds(){
    for (var k =0; k < theClouds.length; k++){
        theCloud = theCloouds[k];
        removeCloud(theCloud);
    }
}*/

//Mudar pagina
function playGame(){

    welcome = false;
    playing = true;
    gameOver = false;
    paused = false;
    buttonUnpause.hide();

    //colocar volume mais baixo
    soundBackground.setVolume(0.02);

    //iniciar musica
    soundBackground.loop();

}

//Pausar o jogo
function pauseGame(){
    welcome = false;
    playing = false;
    paused = true;
    gameOver = false;
}

//Limpar o array dos obstaculos
function deleteObstacles(){
   // console.log("delete");
    for (var k = 0; k < theObstacles.length; k++){
        theObstacle = theObstacles[k];
        removeObstacle(theObstacle);
    }
}

//Remove o obstaculo
function removeObstacle(obj){
     var index = theObstacles.indexOf(obj);
     if ( index > -1){
         theObstacles.splice(index, 1);
        // console.log("removi");
     }
 }

//butão remomeçar jogo
function restartGame(){

    deleteObstacles();

    //console.log("restart");
    welcome = false;
    playing = true;
    gameOver = false;
    paused = false;

    meters = 0;
    timer = 3;
    text1= 0;
    time = 0;
    time2 = 0;
    time3 = 0;
    catX = 70;
    slide = 0;
    slide2 = 0;
    slide3 = 0;
    catY = height - 210; 
    catW = 310; 
    catH = 140;
    
}

//Butão voltar ao welcome
function backToWelcome(){

    welcome = true;
    playing = false;
    gameOver = false;
    paused = false;

}

//mouse Pressed
function mousePressed(){
}

//Simbolo jogos olimpicos
function OlimpicSymbol(){
    
    //Retirar interior do circulo
    noFill();

    //posição do simbolo
    let WIDTH = 120;
    let HEIGHT = 80;

    //Defenir stroke do circulo
    var penStroke = 2;
    strokeWeight(penStroke);

    //Tamanho do simbolo
    var diameter = 30;

    // Anel Preto
    stroke("black");
    circle(WIDTH / 2, HEIGHT / 2 - diameter/4, diameter);

    // Anel Azul
    stroke("blue");
    circle(WIDTH / 2 - diameter - 2 * penStroke, HEIGHT / 2 - diameter/4, diameter);

    // Anel Vermelho
    stroke("red");
    circle(WIDTH / 2 + diameter + 2 * penStroke, HEIGHT / 2 - diameter/4, diameter);
    
    // Anel Amarelo
    stroke("yellow");
    circle(WIDTH / 2 - diameter/2 - penStroke, HEIGHT / 2 + diameter/4, diameter);
    
    // Anel Verde
    stroke("lime");
    circle(WIDTH / 2 + diameter/2 + penStroke, HEIGHT / 2 + diameter/4, diameter);
    
    // Arco superior do azul sobre o amarelo
    stroke("blue");
    arc(WIDTH / 2 - diameter - 2 * penStroke, HEIGHT / 2 - diameter/4, diameter,diameter,-PI/4,PI/4);
    
    // Arco superior do preto sobre o verde e amarelo
    stroke("black");
    //Sobre o verde
    arc(WIDTH / 2, HEIGHT / 2 - diameter/4, diameter,diameter, -PI/4,PI/4);
    //Sobre o amarelo
    arc(WIDTH / 2, HEIGHT / 2 - diameter/4, diameter,diameter, PI/2,2*PI/3);
    
    // arco superior do vermelho sobre o verde
    stroke("red");
    arc(WIDTH / 2 + diameter + 2 * penStroke, HEIGHT / 2 - diameter/4, diameter,diameter,PI/2,2*PI/3);

}

//Função identificação do aluno
function studentName(){
        
    //Texto de identificação do aluno
      
        if( millis() - time > breakTime){
            let p = createP(identification);
            let col = color(random(0, 255), random(0, 255), random(0, 255));
            time = millis();
            p.style('font-size', '30px');
            p.style('color', col)
            p.position(10, windowHeight-80);
        }
   
}

//função para parar ou inicar som
function pausePlayMusic(){

    if (soundBackground.isPlaying()==true){

        soundBackground.pause();
        buttonPauseMusic.hide();
        buttonPlayMusic.show();

    }else{

        soundBackground.play();
        buttonPauseMusic.show();
        buttonPlayMusic.hide();
    }
}

//recise do canvas
function windowResized(){
    resizeCanvas(windowWidth-10, windowHeight-150);

}

//Função para resolver problemas de arranque de som em alguns navegadores
function touchStarted(){
    if(getAudioContext().state !== 'running'){
        getAudioContext().resume();
    }
}