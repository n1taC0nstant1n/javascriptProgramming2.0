class Utilizator{
    nume;
    email;
    varsta;
    static nr_picioare = 2;

    constructor(n, e, v){
        this.nume = n;
        this.email = e;
        this.varsta = v;
    }

    salut(){
        console.log(`Salut numele meu este ${this.nume}!`)
    }

    static merge(nr_pasi){
        console.log(`Utilizatorul a mers azi ${nr_pasi} cu cele ${Utilizator.nr_picioare} picioare`)
    }

}

let user = new Utilizator('Ion', 'ion@ion.com', 23);
console.log(user.nume);
user.varsta = 32;
console.log(user);
user.salut();
console.log(Utilizator.nr_picioare);
Utilizator.merge(8000);
let user2 = new Utilizator('Dan', 'dan@dan.ro', 22);
console.log(user2);
user2.salut();