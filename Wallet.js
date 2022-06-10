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
        //this method will checks are user is able to play wich his saldo
        this.checkUserCanPlay = (value) => {
            if (_money >= value) return true
            else {
                return false
            }
        }

        //one method for both operation like add/substract cash from/to wallet
        //it's need two parameters 1: value  2: type (+/-)

        this.changeWalletValue = (value, type) => {
            //this if statment checks that passed value is number AND also is build in JS method
            //wich is called isNan, because NaN(not a number) is threated like number normaly?
            if (typeof value === "number" && !isNaN(value)) {
                if (type === '+') {
                    return _money += value;
                } else if (type === '-') {
                    return _money -= value;
                } else {
                    //something new, instance in Error module?
                    throw new Error('Możesz dodawać lub odejmować stan portfela!')
                }
            } else {
                throw new Error('Nieprawidłowy typ działania.')
            }

        }
    };


}


const wallet = new Wallet(200);