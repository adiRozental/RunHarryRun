const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const player = new Image();
player.src = 'images/player/Walk (1).png';
const ground = new Image();
ground.src = 'images/background/Layers/layer01_ground.png';
const sky = new Image();
sky.src = 'images/background/Layers/layer06_sky.png';
const clouds = new Image();
clouds.src = 'images/background/Layers/layer04_clouds.png';
const trees = new Image();
trees.src = 'images/background/Layers/layer03_trees.png';
const cake = new Image();
cake.src = 'images/background/Layers/layer02_cake.png';
//player1.src = 'images/player/Walk (1).png';


let i = 1;
let j = 0;
let t = 0;
let c = 0;
let gr = 0;
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    player.src =`images/player/Walk (${i}).png`;
    ctx.drawImage(sky,0,0,600,600);
    //ctx.drawImage(cake,0,100,700,500);
    ctx.drawImage(clouds,-c,0,600,600);
    ctx.drawImage(clouds,600-c,0,600,600);
    ctx.drawImage(trees,-t*2,0,600,600);
    ctx.drawImage(trees,600-t*2,0,600,600);
    ctx.drawImage(ground,0-gr,0,1920,600);
    ctx.drawImage(ground,1920-gr,0,1920,600);
    // ctx.fillRect(500,500,50,50);

    ctx.drawImage(player, 20,350,140,145);
    j+=1;
    if(j > 2){ j = 0;
        i = ((i+1)%20)+1;
    }
    t = (t+3)%300;
    c = (c+1)%600;
    gr = (gr+5)%1920;
    requestAnimationFrame(animate);
}
animate();