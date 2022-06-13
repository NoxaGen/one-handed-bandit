class Game {
    constructor() {
        this.stats = new Statistics();
        this.wallet = new Wallet(200);
        document.getElementById('spin').addEventListener('click', this.startGame)
        //spans 
        this.walletSaldo = document.querySelector('[data-summary="user-cash"]');
        this.lostCash = document.querySelector('[data-summary="lost-cash"]');
        this.numberOfSpins = document.querySelector('[data-summary="spins"]');
        this.numberOfWins = document.querySelector('[data-summary="wins"]');
        this.numberOfLoses = document.querySelector('[data-summary="losses"]');

        this.render()
    }

    //method for refreshing all information 
    render() {
        console.log('gramy ziomo')
    }

    startGame() {

    }

}