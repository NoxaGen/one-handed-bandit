class Game {
    constructor() {
        this.stats = new Statistics();
        this.wallet = new Wallet(200);
        //addEventListener zrywa połączenie this'a, dlatego trzeba je 'związać' bindem
        //w ten sposób jest jakby utworzona nowa metoda która przechowuje poprawną referencje do thisa
        document.getElementById('spin').addEventListener('click', this.startGame.bind(this));
        this.inputBid = document.getElementById('bid');
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

    //why this doesn't work but when i called instance game its working?
    //wiązanie zrywa tez addEventListener podobnie jak foreach?
    // rozwiązanie to nie game, tylko użycie ZWIĄZANIA - BIND'a
    startGame() {
        //this statment checks is value is minimum 1, mathfloor also convert string into number in hidden process
        if (this.inputBid.value < 1) return alert('Minimalna wartość aby zagrać nie może być mniejsza niż 1$')
        //this var store passed bid in the inpute so we can use it in this method 
        const bid = Math.floor(this.inputBid.value);

        //this statment calling method from Wallet class that check user have enough coins to play
        if (!this.wallet.checkCanPlay(bid)) return alert("Masz za mało środków aby zagrać!")

        //call of the method that allows us 
        this.wallet.changeWalletValue(bid, '-');


    }

}