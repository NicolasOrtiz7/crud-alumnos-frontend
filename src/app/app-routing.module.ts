import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './Components/editar/editar.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { NuevoComponent } from './Components/nuevo/nuevo.component';
import { PapeleraComponent } from './Components/papelera/papelera.component';

const routes: Routes = [
  {path:"inicio", component:InicioComponent},
  {path:"nuevo", component:NuevoComponent},
  {path:"editar", component:EditarComponent},
  {path:"papelera", component:PapeleraComponent},
  {path:"",redirectTo:"/inicio", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
