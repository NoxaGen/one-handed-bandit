class Game {
    constructor() {
        this.stats = new Statistics();
        this.wallet = new Wallet(200);
        document.getElementById('spin').addEventListener('click', this.startGame)
        this.inputBid = document.querySelector('.panel .text input');
        //spans 
        this.walletSaldo = document.querySelector('[data-summary="user-cash"]'); //money
        this.lostCash = document.querySelector('[data-summary="lost-cash"]');
        this.numberOfSpins = document.querySelector('[data-summary="spins"]'); //0 stats
        this.numberOfWins = document.querySelector('[data-summary="wins"]'); //1 stats
        this.numberOfLoses = document.querySelector('[data-summary="losses"]'); //2 stats
        //fruit divs
        this.fruitsInMachine = [...document.querySelectorAll('[data-option="fruit"]')];
        //render method from below
        this.render()
    }

    //all this params are startup params - they will be raplaced by another method
    render(render = ['url(./images/dolar_start_sign.png)', 'url(./images/dolar_start_sign.png)', 'url(./images/dolar_start_sign.png)'],
        money = this.wallet.getWalletValue(), stats = [0, 0, 0], lostMoney = 0, result = "", bid = 0, wonMoney = 0) {
        this.walletSaldo.textContent = money;
        if (result) {
            result = `Wygrałeś ${wonMoney}`;
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid}`
        }
        this.lostCash.textContent = lostMoney;
        this.numberOfSpins.textContent = stats[0];
        this.numberOfWins.textContent = stats[1];
        this.numberOfLoses.textContent = stats[2];
        this.fruitsInMachine.forEach((fruit, index) =>
            fruit.style.backgroundImage = render[index]
        )

    }

    startGame() {

    }

}