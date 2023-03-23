import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})

export class Login2Component {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group(
      {
        name:['', [Validators.required, Validators.minLength(5)]],
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(8)]],
        confirmPassword:['', [Validators.required]],
      },
      {
        Validators: this.passwordMatch('password', 'confirmPassword')
      }
    )
  }

  get Name(){
    return this.form.get('name');
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  get ConfirmPassword(){
    return this.form.get('confirmPassword');
  }

  passwordMatch(p1: String, p2: String){
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(p1);
      const pass2Control = formGroup.get(p2);

      if (pass1Control?.value !== pass2Control?.value) {
        pass2Control?.setErrors({distinto: true});
      } else {
        pass2Control?.setErrors(null);
      }
    }
  }
}


