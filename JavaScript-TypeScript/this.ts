// this

class Test {

    doTest(): void {
        // 方式一：无智能提示
        setTimeout(function () {
            console.log('function bind this, this =', this); // Test {}
            this.hi(); //  Test {}
        }.bind(this), 100);

        // 方式二：有智能提示
        let self = this;
        setTimeout(function () {
            console.log('function use self, this === self', this === self); // false
            self.hi(); // Test {}
        }, 100);

        // 方式三
        setTimeout(this.hi.bind(this), 100);

        // 方式四
        setTimeout(() => {
            console.log('()=>{}, this =', this); // Test {}
            this.hi(); // Test {}
        }, 100);
    }

    hi(): void {
        console.log('hi this =', this);
    }
}

let test: Test = new Test();
test.doTest();