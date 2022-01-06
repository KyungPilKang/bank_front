function Account(id,name,money,grade) {
    this.id=id; 
    this.name=name; 
    this.balance=money; 
    this.grade=grade;
    this.info = function() {
        return "id:"+this.id+", name:"+this.name+", balance:"+this.balance;
    };
    this.deposit = function(money) {
        if(money>0) {
            this.balance+=money;
        }
    };
    this.withdraw = function(money) {
        if(this.balance>=money) {
            this.balance-=money;
        }
    };
}