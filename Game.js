class Game {
    constructor() {
        //open two instances 
        this.stats = new Statistics();
        this.wallet = new Wallet(200);

        //i need to bind (this) cause event listener - breaking bound of it
        document.getElementById('spin').addEventListener('click', this.startGame.bind(this));
        this.inputBid = document.getElementById('bid');
        //spans 
        this.walletSaldo = document.querySelector('[data-summary="user-cash"]'); //money
        this.lastGame = document.querySelector('[data-summary="last-game"]'); //history of last game
        this.numberOfSpins = document.querySelector('[data-summary="spins"]'); //0 stats
        this.numberOfWins = document.querySelector('[data-summary="wins"]'); //1 stats
        this.numberOfLoses = document.querySelector('[data-summary="losses"]'); //2 stats
        //fruit divs converted into arr
        this.fruitsInMachine = [...document.querySelectorAll('[data-option="fruit"]')];
        //render method from below
        this.render()
    }

    //all this params are startup params - startGame method will upgrade them
    render(render = ['url(./images/dolar_start_sign.png)', 'url(./images/dolar_start_sign.png)', 'url(./images/dolar_start_sign.png)'],
        money = this.wallet.getWalletValue(), stats = [0, 0, 0], lastGame = "", result = "", bid = 0) {

        if (result) {
            document.querySelector('.summary p:nth-child(2)').style.color = "rgb(6, 214, 6)";
            document.querySelector('.summary p:nth-child(2)').style.textShadow = "2px 5px 30px rgb(6, 214, 6);";
            lastGame = `You win +${bid * 3}!`;
        } else if (!result && result !== "") {
            document.querySelector('.summary p:nth-child(2)').style.color = "rgb(251, 17, 17)";
            document.querySelector('.summary p:nth-child(2)').style.textShadow = "2px 5px 30px rgb(251, 17, 17);";
            lastGame = `You lose -${bid}`
        }

        this.walletSaldo.textContent = money;
        this.lastGame.textContent = lastGame;
        this.numberOfSpins.textContent = stats[0];
        this.numberOfWins.textContent = stats[1];
        this.numberOfLoses.textContent = stats[2];
        this.fruitsInMachine.forEach((fruit, index) =>
            fruit.style.backgroundImage = render[index]
        )
    }

    startGame() {

        if (this.inputBid.value < 1) return alert('Bid value cannot be lower than 1$.');
        //input value stored in var 
        const bid = Math.floor(this.inputBid.value);

        if (!this.wallet.checkCanPlay(bid)) return alert("You don't have enough cash in wallet!")

        //method from Wallet class, substract cash after user spin
        this.wallet.changeWalletValue(bid, '-');
        //we open instance for the Draw class
        this.draw = new Draw();
        //now we assign one of the Draw method to the var
        const fruits = game.draw.getDrawResult()

        //maybe its look like noob-code, but it's working fine and rendering proper fruits

        //plum
        if (fruits[0] === 'plum') this.render[0] = this.fruitsInMachine[0].style.backgroundImage = 'url(./images/plum_transparent.png)'
        if (fruits[1] === 'plum') this.render[1] = this.fruitsInMachine[1].style.backgroundImage = 'url(./images/plum_transparent.png)'
        if (fruits[2] === 'plum') this.render[2] = this.fruitsInMachine[2].style.backgroundImage = 'url(./images/plum_transparent.png)'
        //banana
        if (fruits[0] === 'banana') this.render[0] = this.fruitsInMachine[0].style.backgroundImage = 'url(./images/banana_transparent.png)'
        if (fruits[1] === 'banana') this.render[1] = this.fruitsInMachine[1].style.backgroundImage = 'url(./images/banana_transparent.png)'
        if (fruits[2] === 'banana') this.render[2] = this.fruitsInMachine[2].style.backgroundImage = 'url(./images/banana_transparent.png)'
        //cherries
        if (fruits[0] === 'cherry') this.render[0] = this.fruitsInMachine[0].style.backgroundImage = 'url(./images/cherries_transparent.png)'
        if (fruits[1] === 'cherry') this.render[1] = this.fruitsInMachine[1].style.backgroundImage = 'url(./images/cherries_transparent.png)'
        if (fruits[2] === 'cherry') this.render[2] = this.fruitsInMachine[2].style.backgroundImage = 'url(./images/cherries_transparent.png)'

        //we get result from static method 
        const result = Result.checkWinner(fruits);

        //another static method from Result class
        const wonMoney = Result.moneyWinInGame(result, bid);

        if (wonMoney) {
            this.wallet.changeWalletValue(wonMoney, '+')
        }

        this.stats.addGameToStatistics(result, bid);

        //finaly when we get all information we overwrite it below
        this.render([fruits], this.wallet.getWalletValue(), this.stats.showGameStatistics(), this.wonMoney, result, bid);
    }

}