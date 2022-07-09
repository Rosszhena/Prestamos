import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';


const routes: Routes = [
  { path: '', component:SolicitudesComponent},
  { path: 'create', component:CreateComponent},
  { path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
