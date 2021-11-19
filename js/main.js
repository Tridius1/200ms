// 


// Event Functions
async function spaceEvent(event) {
	if (event.code === 'Space') {
    console.log('Space pressed');
    if (sDown) {
    	// Already pressed
    } else {
    	// Fresh push
    	sDown = true;
    	await doDraw();
    }
  }
}

async function noSpaceEvent(event) {
	if (event.code === 'Space') {
    console.log('Space released');
    sDown = false;
  }
}

// Active Functions

function drawBlank() {
	// for init
	var canvas = document.getElementById('interactive0');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d'); // ctx is used to draw
		ctx.fillStyle = 'rgb(200, 200, 200';
		var X = canvas.width;
		var Y = canvas.height;
		ctx.fillRect(0, 0, X, Y);
		console.log('Blank drawn');
	} else {
		// Canvas not supported by browser
		console.log('Canvas not supported by browser');
	}
}

function drawS() {
	// on space event
	var canvas = document.getElementById('interactive0');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d'); // ctx is used to draw
		ctx.fillStyle = 'green';
		var X = canvas.width / 3;
		var Y = canvas.height / 3;
    ctx.fillRect(X, Y, X, Y);
    console.log('Square drawn');
	} else {
		// Canvas not supported by browser
		console.log('Canvas not supported by browser');
	}
}

// Async Functions

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function doDraw() {
	let s = -1;
	if (count < 7) {
		// Delay
		s = 150;
	} else {
		// No Delay
		s = 0;
	}
	await sleep(s);
	drawS();
	await sleep(300);
	drawBlank();
	count = count + 1;
	console.log(s.toString() + 'ms delay, ' + count.toString() + ' draws');
}


// Event Listener
document.addEventListener('keydown', spaceEvent);
document.addEventListener('keyup', noSpaceEvent);

let count = 0; // # of times doDraw has been called
let sDown = false; // is the spacebar down?


