import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { TodolistComponent } from './todo/todolist/todolist.component';

const routes: Routes = [
    {path:"", component: LoginComponent},
    {path: "to-do", component: TodolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
