class GameBoard {
    constructor(board) {
        this.board = board || [['', '', '']
                               ['', '', '']
                               ['', '', '']], 
        this.currentPlayer = 'X'
        this.hasWinner = false;                           
    }

    takeTurn(row, col) {
        if (this.playerTurn === 'X' && this.board[row][col] === '' && !hasWinner) {
            this.board[row][col] = this.player;
            this.currentPlayer = 'O';
        } 
    }

    checkForWin() {
        //checks rows
        var winChecker = '';
        for (var i = 0; i < this.board.length; i++) {
            winChecker = this.board.join('')
            if (winChecker === 'XXX') {
              return 'Player X wins!'
            }

            if (winChecker === 'OOO') {
                return 'Player O wins!'
            }
        }
    }

    
}   