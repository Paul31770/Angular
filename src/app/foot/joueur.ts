import { IJoueur } from "./IJoueur";
export class Joueur implements IJoueur{
    nom: string;
    prenom: string;
    age:number;
    id:number;
    constructor(nom:string, prenom:string, age:number, id:number){
        this.nom = nom;
        this.prenom=prenom;
        this.age=age;
        this.id=id
    }
}