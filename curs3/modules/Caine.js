import {Animal} from '../modules/Animal.js';

class Caine extends Animal{
    cainerau;
    constructor(greutate, cainerau){
        super(greutate);
        this.cainerau = cainerau;

    }

    musca(){
        if(this.cainerau){
            console.log("Atentie caine rau!");
        }else{
            console.log("Acest catel poate fi mangaiat!");
        }
    }
}

export {Caine}