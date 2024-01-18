import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { TodoListComponent } from './task/todo-list/todo-list.component';

const routes: Routes = [
    {path:"", component: LoginComponent},
    {path: "to-do", component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
