class Cloud{

    constructor(pcx, pcy){

        //Varial para as nuvens
        this.cloud = [];

         //carregar nuvens
         this.cloud[0] = loadImage("media/images/cloud(1).png");
         this.cloud[1] = loadImage("media/images/cloud(2).png");
         this.cloud[2] = loadImage("media/images/cloud(3).png");
         this.cloud[3] = loadImage("media/images/cloud(4).png");
         this.cloud[4] = loadImage("media/images/cloud(5).png");
         this.cloud[5] = loadImage("media/images/cloud(6).png");

        // posição
        this.x;

        //posicionar cloud
        this.x = pcx;
        this.y = pcy
       
        // tamanho das nuvens
        this.height =  30 + random(0, 130);
        this.width = this.height + 30;
        this.m = int (random(0, 6));

    }

    moveCloud(){

        image(this.cloud[this.m], windowWidth - this.x, this.y, this.width, this.height);
        this.x = this.x + 5;

    }
}