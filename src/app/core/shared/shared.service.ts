import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    constructor(private loginService: LoginService, private router: Router) { }

    login(email:string, password:string):Observable<any> { 

        return this.loginService.login(email,password);
    }

    setToken(token:any) {
        
        localStorage.setItem("token",token)
    }
}
