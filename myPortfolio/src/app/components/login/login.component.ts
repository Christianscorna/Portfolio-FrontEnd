import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName = '';
  password = '';
  email = '';

  constructor( private authService: AuthService ){}

  login(){
    this.authService.login(this.userName, this.password, this.email);
  }



}
