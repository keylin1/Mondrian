var barX = 240;
var barY = 600;
var pageHeight = 1500;
var pageWidth = 2500;
var stroke = 50;

var canvas = document.getElementById('creativeCoding');
var ctx = canvas.getContext('2d');
dpi = window.devicePixelRatio;


function fix_dpi() {
    let style = {
      height() {
        return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
      },
      width() {
        return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
      }
    }
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}


function draw() {
  var canvas = document.getElementById('creativeCoding');
  if (canvas.getContext) {
   
    fix_dpi(); 
    var ctx = canvas.getContext('2d');
    //White
    ctx.fillStyle = 'rgb(247, 247, 240)';
    ctx.fillRect(0, 0, barX, barY)
    ctx.fillRect(barX, barY, pageWidth, pageHeight)

    // Black .fillRect(x, y, width, height)
    ctx.fillStyle = 'rgb(0, 0, 0)'; 
    ctx.fillRect(barX, 0, stroke, pageHeight);
    ctx.fillRect( 0 , barY, pageWidth, stroke );
    ctx.fillRect(0, 200 , barY, stroke+30); 
    ctx.fillRect(1400, barY, stroke, barY + pageHeight );
    ctx.fillRect(1400, barY+150, pageWidth, stroke-10);
    
    // Red
    ctx.fillStyle = 'rgb(255, 0, 0)'; 
    ctx.fillRect(barX+50, 0, pageWidth - barX, barY);

    // Blue
    ctx.fillStyle = 'rgb(12, 69, 138)'; 
    ctx.fillRect( 0 ,  barY+50, barX, barY + pageHeight );

    // Yellow
    ctx.fillStyle = 'rgb(250, 235, 125)'; 
    ctx.fillRect( 1400+stroke, barY+190, pageWidth, pageHeight);

    }
  }
