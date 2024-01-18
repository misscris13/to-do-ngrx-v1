import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TodoListComponent,
    TaskEditComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    NgFor,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    {
        provide: MAT_DIALOG_DATA,
        useValue: {},
    },
  ]
})
export class TaskModule { }
