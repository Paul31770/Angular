import { Injectable } from "@angular/core";
import { Joueur } from "./joueur";

@Injectable()
export class JoueurService {
    footArray: Array<Joueur> =[new Joueur('Messi','Lionel',35, 1),new Joueur('Ronaldo','Cristiano', 36, 2),new Joueur('Neymar','Da Silva' ,30, 3)];
    constructor() {

    }
    
      
    
      
    getJoueurs(): Array<Joueur> {
        return this.footArray;
    }
    getJoueur(id:number): Joueur | undefined {
        return this.footArray.find(j=>j.id==id);
    }
    
    }
