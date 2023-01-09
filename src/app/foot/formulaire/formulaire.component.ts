import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { IJoueur } from '../IJoueur';

import { ActivatedRoute, Router } from '@angular/router';
import { JoueurService } from '../joueur.service';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit {
  
  constructor(private fb:FormBuilder, private route: ActivatedRoute, private joueurService: JoueurService, private router: Router){
    }

  goToJoueur(id:number){
    this.router.navigate(['/foot','edit', id])
  }

  ngOnInit(): void {
    if (this.foot){
      this.joueurForm.patchValue(this.foot);
    }
    else{
      this.route.paramMap.subscribe(params=>{
        if(params.has('id')){
          const id=Number(params.get('id'));
          this.foot=this.joueurService.getJoueur(id);
        }
        if(this.foot){
          this.joueurForm.patchValue(this.foot);

        }

      })
    }
  }
  
  @Input() public foot : IJoueur |undefined;
  public jou:IJoueur | undefined;
  
  joueurForm=this.fb.group({
    nom:['',[Validators.required,Validators.minLength(3)]],
    age:[0, [Validators.required,Validators.min(15)]]
  })

  

 public onSubmit(){
    if(this.joueurForm.valid){
      this.foot!.nom=this.joueurForm.value.nom??'';
      this.foot!.age=this.joueurForm.value.age??0;
     this.router.navigate(['/foot','liste']);
 }

}}

