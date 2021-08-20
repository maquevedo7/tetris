var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const row = 16;
const column = 10;
const square = 40; //square size
const VACANT = "blue"; //color of a empty square

//draw a square
function drawSquare(x, y, color) {
    ctx.fillStyle = color; //color full
    ctx.fillRect(x * square, y * square, square, square); //position and size
    ctx.strokeStyle = "black"; //color line
    ctx.strokeRect(x * square, y * square, square, square); //position and size
}

//create the board
let board = [];
for (r = 0; r < row; r++) {
    board[r] = []; //row
    for (c = 0; c < column; c++) {
        board[r][c] = VACANT; //column
    }
}
//console.log(board);

//draw the board
function drawBoard() {
    for (r = 0; r < row; r++) {
        //row
        for (c = 0; c < column; c++) {
            //column
            drawSquare(c, r, board[r][c]); //
        }
    }
}

drawBoard();

//create pieces
const I = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
    ],
];

const J = [
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1],
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
    ],
];

const L = [
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0],
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
    ],
];

const O = [
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ],
];

const S = [
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1],
    ],
    [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
    ],
];

const T = [
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0],
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
    ],
];

const Z = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
    ],
    [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0],
    ],
];

//color to pieces

const pieces = [
    [Z, "green"],
    [S, "black"],
    [T, "cyan"],
    [O, "orange"],
    [L, "purple"],
    [I, "yellow"],
    [J, "white"],
];

//ramdom pieces

function randomp() {
    let r = Math.floor(Math.random() * pieces.length);
    return new piece(pieces[r][0], pieces[r][1]);
}

let p = randomp();

//object piece

function piece(tetromino, color) {
    this.tetromino = tetromino;
    this.color = color;

    this.tetrominoN = 0; //first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];

    //controlling the pieces
    this.x = 5; //row
    this.y = 4; //column in this position the piece is out of board in the top
}

// fill function

piece.prototype.fill = function (color) {
    for (r = 0; r < this.activeTetromino.length; r++) {
        for (c = 0; c < this.activeTetromino.length; c++) {
            //Draw only occupied squares
            if (this.activeTetromino[r][c]) {
                drawSquare(this.x + c, this.y + r, color);
            }
        }
    }
};

//draw a piece

piece.prototype.draw = function () {
    this.fill(this.color);
};
//p.draw();

//undraw a piece

piece.prototype.unDraw = function () {
    this.fill(VACANT);
};
