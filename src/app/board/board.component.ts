import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit  {
  //holds an array of strings for each square
  squares: string[];
  //boolean to decide who has next move
  xNextMove: boolean;
  //string to return the winner at the end of a game
  winner: string;
  draw: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //when the board component is initiated, call a new game function
    this.newGame();
  }

  newGame() {
    //fill square array and winner with null values on beginner and set x as first move at start of game
    this.squares = Array(9).fill(null)
    this.winner = null;
    this.xNextMove = true;
  }
  //changes the player from X to O depending on if the xNextMove boolean is true or false
  get player() {
    return this.xNextMove ? 'X' : 'O';
  }

  //called each time a square is clicked
  makeMove(idx: number) {

    //if the squares index isnt already present in the area (ie it hasnt already been select by a player)
    if(!this.squares[idx]){
      //then splice the array at this index and enter the current player (either X or O)
      this.squares.splice(idx, 1, this.player);
      //changes xNextMove to the opposite value, so the other player has the next choice
      this.xNextMove = !this.xNextMove;
    }
    //set the winner string value to the returned value of the calculateWinner() function
    this.winner = this.calculateWinner();
    if (!this.squares.includes(null)){
      this.drawGame();
    }
  }

  drawGame(){
    this.draw = true;
  }

  //this function is called every time a square is clicked
  calculateWinner(){
    //array to hold each possible winning line
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];


    //for loop to cycle through array
    for (let i = 0; i < lines.length; i++){
      //const a b c holds the possible winning lines as an array
      const[a, b ,c] = lines[i]
      if(
        //if the places selection matches any of the possible winning lines
        this.squares[a] &&
        this.squares[a] === this.squares [b] &&
        this.squares[a] === this.squares[c]
       ) {
        //if the squares array matches the criteria, then return the square array
        return this.squares[a];
      }
    }
    //otherwise return null
    return null;
  }
}


