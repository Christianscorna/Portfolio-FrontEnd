import { Component } from '@angular/core';

interface Usuario {
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  contrasena: string;
  confirmarContrasena: string;
}

@Component({
  selector: 'app-login-b',
  templateUrl: './login-b.component.html',
  styleUrls: ['./login-b.component.css']
})

export class LoginBComponent {
  usuario: Usuario = {
    nombre: '',
    apellido: '',
    nombreUsuario: '',
    contrasena: '',
    confirmarContrasena: ''
  };

  onSubmit() {
    console.log(this.usuario);
    // Agregar lógica para guardar el usuario en el servidor
  }
}
