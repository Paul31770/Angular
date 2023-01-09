import { Injectable } from "@angular/core";
import { Joueur } from "./joueur";

@Injectable()
export class JoueurService {
    footArray: Array<Joueur> =[new Joueur('Messi',35, 1),new Joueur('Ronaldo', 36, 2),new Joueur('Neymar' ,30, 3)];
    constructor() {

    }
    
      
    
      
    getJoueurs(): Array<Joueur> {
        return this.footArray;
    }
    getJoueur(id:number): Joueur | undefined {
        return this.footArray.find(j=>j.id==id);
    }
    
    }
