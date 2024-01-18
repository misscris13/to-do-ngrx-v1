import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

    rawTasks: Task[];
    tasks: Task[];
    filtered: number[];
    icons: String[] = ["check_circle", "warning", "error"];
    iconColor: String[] = ["green", "yellow", "red"];

    constructor(
        private taskService: TaskService,
    ) {}

    ngOnInit(): void {

        this.taskService.getTasks().subscribe(
            res => this.rawTasks = res
        );

        this.tasks = this.rawTasks;

        this.filtered = [];
    }

    changeDone(task:Task) {

        task.done = !task.done;
    }

    toggleTasks(priority:number) {
        
        let filteredTasks: Task[];
        this.tasks = this.rawTasks;

        if (!this.filtered.includes(priority)) {
            this.filtered.push(priority);
        } else {
            this.filtered = this.filtered.filter(n => n != priority);
        }
        
        this.filtered.forEach(n => {
            this.taskService.getTasks().subscribe(
                res => {
                    filteredTasks = this.tasks.filter(task => task.priority != n);
                }
            );
            this.tasks = filteredTasks;
        });
    }
}
