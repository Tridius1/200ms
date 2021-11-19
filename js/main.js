// 


// Event Functions
async function spaceEvent(event) {
	if (event.code === 'Space') {
    console.log('Space pressed');
    await drawS();
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

// Async Functions

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function drawS() {
	// on space event
	var canvas = document.getElementById('interactive0');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d'); // ctx is used to draw
		ctx.fillStyle = 'green';
		var X = canvas.width / 3;
		var Y = canvas.height / 3;
    ctx.fillRect(X, Y, X, Y);
    console.log('Square drawn');
    await sleep(190);
    drawBlank();

	} else {
		// Canvas not supported by browser
		console.log('Canvas not supported by browser');
	}
}


// Event Listener
document.addEventListener('keyup', spaceEvent);


