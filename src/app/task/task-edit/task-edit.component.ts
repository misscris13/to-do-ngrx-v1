import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from '../task.service';
import { Task } from '../model/Task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

    task: Task;

    constructor(
        public dialogRef: MatDialogRef<TaskEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private taskService: TaskService
    ) {}

    ngOnInit(): void {
        
        if (this.data.task != null) {
            this.task = this.data.task;
        } else {
            this.task = new Task();
        }
    }

    onSave() {
        this.taskService.saveTask(this.task).subscribe(
            res => {
                this.dialogRef.close();
            }
        );
    }

    onClose() {
        this.dialogRef.close();
    }
}
