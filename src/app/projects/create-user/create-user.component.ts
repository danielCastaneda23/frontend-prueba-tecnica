import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.sass'
})
export class CreateUserComponent {
public formGroup: FormGroup;

  constructor(private project: ProjectService) {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {
    const token = localStorage.getItem('token') ?? '';
    this.project.createUser({
      email: this.formGroup.value['email'],
      password: this.formGroup.value['password'],
      role: this.formGroup.value['role'],

    }, token);
  }
}
