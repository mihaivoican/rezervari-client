import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSpectacoleComponent } from './lista-spectacole/lista-spectacole.component';
import { RezervariComponent } from './rezervari/rezervari.component';

const routes: Routes = [
  {
    path:'rezervari/:id',
    component:RezervariComponent
  },
  {
    path:'**',
    component:ListaSpectacoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
