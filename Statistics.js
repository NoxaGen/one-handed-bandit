class Statistics {
    constructor() {
        //this array is created for store game history from method below
        this.gameResults = []
    }

    //method wich requies 2 args
    //example: user wins and won 10$, so we need to put (true, 10)
    //example2: user set bid 
    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult)
    }

    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length
        console.log(games, wins, losses);
        return [games, wins, losses]
    }
}

// const stats = new Statistics()