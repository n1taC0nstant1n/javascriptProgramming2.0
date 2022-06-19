import {Carte,Manual} from '../modules/Carte.js'

let carte = new Carte('Poezii', 'George Bacovia');
console.log(carte);
carte.toString();
carte.deschidCartea();

carte.titlu = 'Ion';

let manual = new Manual('Limba Romana', 'Niculescu', 25);
manual.toString();
manual.getComanda();
