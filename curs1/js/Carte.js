class Carte{
    constructor(titlu, autor, editura, an_aparitie, nr_pagini){
        this.titlu= titlu;
        this.autor= autor;
        this.editura = editura;
        this.an_aparitie = an_aparitie;
        this.nr_pagini = nr_pagini;
    }

    afiseazaTitlu(){
        console.log(`Titlul cartii este ${this.titlu}`);
    }
}