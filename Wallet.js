class Wallet {
    constructor(money) {
        //private variable to store information
        let _money = money;
        //method below allow to download wallet value
        this.getWalletValue = () => _money;


        //this method will check that user have enough coins for bid he want to put
        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }

        //check value is ok
        this.changeWalletValue = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("Nieprawidłowy operator działania.")
                }

            } else {
                console.log(typeof value);
                throw new Error("Nieprawidłowa liczba.")
            }
        }
    }
}