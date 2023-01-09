import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootListComponent } from './foot/foot-list/foot-list.component';
import { FormulaireComponent } from './foot/formulaire/formulaire.component';

const routes: Routes = [
  { path: 'foot/edit/:id', component:FormulaireComponent},
  {path : 'foot/liste', component:FootListComponent},
  { path: '', redirectTo: '/foot/liste', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
