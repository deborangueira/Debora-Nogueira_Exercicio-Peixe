var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var tartaruga;

    function preload() { 
        
        // oceano
        this.load.image('oceano', 'assets/bg_azul-claro.png');

        // fundo do mar
        this.load.image('cenário','assets/cenario-oceano.png')
        
        // logo
        this.load.image('logo', 'assets/logo-inteli_azul.png');
    
        // tartaruga
        this.load.image('tartaruga', 'assets/peixes/tartaruga.png');

    }

    function create() {   

        // oceano
        this.add.image(400,300, 'oceano');

        // fundo do mar
        this.add.image(400,300,'cenário');

        // logo
        this.add.image(400,525,'logo').setScale(0.5);

        // tartaruga (guardada em uma variável)
        tartaruga = this.add.image(400,300,'tartaruga').setOrigin(0.5,0.5);
        
        // transformando a variável
        tartaruga.setFlip(true,false);
    }       

    function update() {        
        //adicionar movimento a tartaruga
        tartaruga.x = this.input.x;
        tartaruga.y = this.input.y;
     }