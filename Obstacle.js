class Obstacle{

    constructor(pox){

        this.obstacle = [];

         //carregar obstaculo
         this.obstacle[0] = loadImage("media/images/obstacle.png");
         this.obstacle[1] = loadImage("media/images/puddle.png");
        
        // posição
        this.x;
        this.y;

        //tamanho
        this.w;
        this.h;

        //Valores
        this.x = 1920;
        this.y = 220;
        this.image = 340;
        this.w = 200;
        this.h = 200;

        //posicionar obstacle
        this.m = int(random(0, 2));

    }

    moveObstacle(){

        //verificar se o obstaculo está fora do canvas
          if (this.x < 0){
            // remover obstaculo
            this.deleteObstacle();
        }

        if(this.m == 0){

            //obstacle
            image(this.obstacle[this.m], this.x, height - this.image);
           // rect(this.x, height - this.y, this.w, this.h);
            this.x = this.x - 10;
            

        }else{

            //puddle
            image(this.obstacle[this.m], this.x, height - this.image);
            //rect(this.x, height - this.y, this.w, this.h);
            this.x = this.x - 10;

        }
    }
        //Eliminar obstaculo
        deleleObstacle() {
            
            //Remover o objeto obstacle do array de obsataculos
            removeObstacle(this);
    }
}