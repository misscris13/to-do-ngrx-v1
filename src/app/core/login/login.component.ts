import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    email = new FormControl('');
    password = new FormControl('');

    constructor(private sharedService:SharedService, private router:Router) {}

    login():void {  
        let res = this.sharedService.login(this.email.value, this.password.value)

        if (res) {

            this.sharedService.setToken(res);
            this.router.navigate(["/to-do"]);
        }
    }
}
