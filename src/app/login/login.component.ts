import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',
})
export class LoginComponent {
  public formGroup: FormGroup;

  constructor(private login: LoginService) {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {
    this.login.login({
      email: this.formGroup.value['email'],
      password: this.formGroup.value['password'],
    });
  }
}
