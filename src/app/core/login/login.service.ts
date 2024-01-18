import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TOKEN } from './mock-token';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor() { }

    login(email:string, password:string):Observable<any> {

        // check if user is logged in
        return of(TOKEN);
    }   
}
