import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Joueur } from '../joueur';
import { Validators } from '@angular/forms';
import { IJoueur } from '../IJoueur';
import { Router } from '@angular/router';
import { JoueurService } from '../joueur.service';


@Component({
  selector: 'app-foot-list',
  templateUrl: './foot-list.component.html',
  styleUrls: ['./foot-list.component.css']
})
export class FootListComponent implements OnInit{
  title = 'Foot List';
  footArray: Array<Joueur> =new Array<Joueur>();
  jou: IJoueur|undefined;
 
  
  public onSelect(joueur: IJoueur)
  {
    this.router.navigate(['/foot','edit', joueur.id]); 
    this.jou=joueur;

   
  }

  constructor(private router: Router, private joueurService: JoueurService){
    this.title = 'Foot List';
    
  }
  
  ngOnInit():void{
    this.footArray=this.joueurService.getJoueurs();
  }


  
}



