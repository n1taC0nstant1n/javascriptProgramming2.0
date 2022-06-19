class Carte {
    titlu;
    autor;
    constructor(titlu,autor, editura,an,pret) {
        this.titlu = titlu;
        this.autor = autor;
        this.editura = editura;
        this.an = an;
        this.pret =pret;
    }

    toString(){
        console.log(`Cartea se numeste ${this.titlu} si este scrisa de ${this.autor}`)
    }
    deschidCartea(){
        console.log('Am deschis cartea la pagina 15');
    }
    randomIntFromInterval(min, max) { // min and max included 
       return Math.floor(Math.random() * (max - min + 1) + min)
    }
     

}

class Manual extends Carte{
    nr_bucati;
    constructor(titlu, autor, nr_bucati){
        super(titlu, autor);
        this.nr_bucati = nr_bucati;
    }
    getComanda(){
        console.log(`Cartea ${this.titlu} este comandata in ${this.nr_bucati} bucati`)
    }

    toString(){
        super.toString();
            console.log('Sunt in clasa copil si apelez metoda din clasa parinte');

        }
}


// Curs 2 Module
export {Carte,Manual}