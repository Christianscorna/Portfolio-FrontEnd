import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  api = 'https://localhost:4200/api';
  token: any; 

  constructor( private http: HttpClient, private router: Router){}

  login( userName: string, password: string, email: string ) {
    this.http.post(this.api + '/authenticate', { email: email, password: password })
    .subscribe((resp: any) => {
      //Lo redirecciona a su perfil que acá dice profile pero es el q yo le tiré como admin, OJOOOO!
      this.router.navigate(['profile']);
      //Acá se guardaria el token del que se registra (ponele)
      localStorage.setItem('auth_token', resp.token );
    })
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  public get logIn(): boolean {
    return ( localStorage.getItem('token') !== null );
  }
}
