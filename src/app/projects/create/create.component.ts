import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Route, Router } from '@angular/router';

import { Component } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.sass',
})
export class CreateComponent {
  public formGroup: FormGroup;

  constructor(private project: ProjectService, private router: Router) {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      state: new FormControl(false),
    });
  }

  public async onSubmit() {
    const token = localStorage.getItem('token') ?? '';
    console.log(this.formGroup.value)
    await this.project.createProject(
      {
        name: this.formGroup.value['name'],
        description: this.formGroup.value['description'],
        state: this.formGroup.value['state'],
      },
      token
    );

    this.router.navigate(['/dashboard/projects']);
  }
}
