import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TOKEN } from './mock-token';
import { User } from './model/User';
import { USER_DATA } from './model/mock-users';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    users: User[];

    constructor() { }

    getUsers(): User[] {
        return USER_DATA;
    }

    login(email:string, password:string):Observable<any> {
        
        let user = this.getUsers()
        .filter(u => u.email == email && u.password == password)

        if(user) {
            return of(TOKEN);
        }
    }   
}
