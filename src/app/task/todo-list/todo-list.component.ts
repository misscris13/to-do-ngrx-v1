import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

    tasks: Task[];
    icons: String[] = ["check_circle", "warning", "error"];
    iconColor: String[] = ["green", "yellow", "red"];

    constructor(
        private taskService: TaskService,
    ) {}

    ngOnInit(): void {

        this.taskService.getTasks().subscribe(
            res => this.tasks = res
        );
    }

    changeDone(task:Task) {

        task.done = !task.done;
    }

    toggleTasks(priority:number) {
        
    }
}
