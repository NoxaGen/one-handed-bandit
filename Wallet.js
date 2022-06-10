class Wallet {
    constructor(money) {
        //make hidden variable against using .this
        let _money = money;
        //download actualy value of wallet
        //i need to make this here, because of closures*
        //after arrow function mark => there is always 'return' 
        this.getWalletValue = () => _money;
        //this get WalletValue allows us to check value of wallet by calling this method
        //and setWalletValue obvious to set it by passing value parameter
        this.setWalletValue = (value) => {
            _money = value;
            return _money
        }
    };


}


const wallet = new Wallet(200);