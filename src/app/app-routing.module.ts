import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  {
    path : "",
    component : ContactListComponent
  },
  {
  path: "contact",
  component : ContactEditComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
