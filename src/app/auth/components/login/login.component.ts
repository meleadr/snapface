import { Component } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth:AuthService, private router: Router) {
  }

  onLogin() {
    this.auth.login();
    this.router.navigateByUrl('facesnaps');
  }
}
