(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
	gameBoard = document.querySelector('.puzzle-board'),
	dropZones = document.querySelectorAll('.drop-zone'),
	dropPuzzle = document.querySelectorAll('.puzzle-pieces img');

const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

function changeImageSet() {

pieceNames.forEach((piece, index) =>{
	dropPuzzle[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
	dropPuzzle[index].id = `${piece + this.dataset.puzzleref}`;
}); 
gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
 //debugger;


}

function allowDrag(event) {
	console.log ('started dragging an image');

event.dataTransfer.setData("text/plain", this.id);
}


function allowDragOver(event) {
	event.preventDefault();
	console.log ('dragged over a drop zone');
}

function allowDrop(event) {


	console.log ('dropping in a drop zone');
 let currentImage = event.dataTransfer.getData("text/plain");
 event.target.appendChild(document.querySelector(`#${currentImage}`));

}

puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

dropPuzzle.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {

 zone.addEventListener('dragover', allowDragOver);
zone.addEventListener('drop', allowDrop);

});

changeImageSet.call(puzzleButtons[0]);

})();
