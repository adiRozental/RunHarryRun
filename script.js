const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const player = new Image();
player.src = 'images/player/Walk (1).png';

let i = 1;
let j = 0;
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(50,50,100,100);
    player.src =`images/player/Run (${i}).png`;
    ctx.drawImage(player, 200,200,400,400);
    j+=1;
    if(j > 1){ j = 0;
        i = ((i+1)%20)+1;
    }
    requestAnimationFrame(animate);
}
animate();