import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { AddPersonneComponent } from './components/add-personne/add-personne.component';
import { ListPersonneComponent } from './components/list-personne/list-personne.component';


const routers: Routes = [
  {path:"personne", component:ListPersonneComponent},
  {path:"editPersonne", component: AddPersonneComponent},
  { path: '',   redirectTo: '/personne', pathMatch: 'full' }, // redirect to `first-component`
  {path: "editPersonne/:id", component: AddPersonneComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddPersonneComponent,
    ListPersonneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
