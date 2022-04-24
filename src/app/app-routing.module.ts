import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourbeComponent} from './courbe/courbe.component';

const routes: Routes = [ {
  path:'Courbe',component:CourbeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
