class Draw {
    constructor() {
        this.options = ['banana', 'plum', 'cherry'];
        let _result = this.drawResult()
        this.getDrawResult = () => _result;
    }

    drawResult() {
        let fruits = [];
        //this array will filled with random choices pushes into it
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length)
            const fruit = this.options[index]
            // console.log(fruit);
            fruits.push(fruit)
        }
        return fruits
    }
}

// const draw = new Draw()