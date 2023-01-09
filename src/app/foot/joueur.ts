import { IJoueur } from "./IJoueur";
export class Joueur implements IJoueur{
    nom: string;
    
    age:number;
    id:number;
    constructor(nom:string, age:number, id:number){
        this.nom = nom;
       
        this.age=age;
        this.id=id
    }
}