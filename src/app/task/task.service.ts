import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './model/Task';
import { TASK_DATA } from './model/mock-tasklist';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor() { }

    getTasks(): Observable<Task[]> {
        return of(TASK_DATA);
    }
}
