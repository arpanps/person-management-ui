import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './person/person.component';
import { AddPersonComponent } from './add-person/add-person.component';


const routes: Routes = [
	{ path: '', redirectTo: 'view-person', pathMatch: 'full' },  
  { path: 'view-person', component: PersonComponent },  
  { path: 'add-person', component: AddPersonComponent },  
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
