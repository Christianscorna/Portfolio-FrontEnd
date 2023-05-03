import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario {
  contrasena: string;
  confirmarContrasena: string;
  email: string;
}

@Component({
  selector: 'app-login-b',
  templateUrl: './login-b.component.html',
  styleUrls: ['./login-b.component.css']
})

export class LoginBComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder){

    this.form = this.fb.group(
      {
        email:['', [Validators.required, Validators.email]],
        contrasena: ['', [Validators.required, Validators.minLength(4)]],
        confirmarContrasena:['', [Validators.required, Validators.minLength(4)]]
      }
    )

  }

  get Email(){
    return this.form.get('email');
  }

  get Contrasena(){
    return this.form.get('contrasena');
  }

  get ConfirmarContrasena(){
    return this.form.get('confirmarContrasena');
  }

  usuario: Usuario = {
    contrasena: '',
    confirmarContrasena: '',
    email: '',
  };

  onSubmit() {
    console.log(this.usuario);
    // Agregar lógica para guardar el usuario en el servidor
  }
}
