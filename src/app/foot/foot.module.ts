import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootListComponent } from './foot-list/foot-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { JoueurService } from './joueur.service';



@NgModule({
  declarations: [
    FootListComponent,
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FootListComponent,
    FormulaireComponent
  ],
  providers:[
    JoueurService
  ]

})
export class FootModule { }
