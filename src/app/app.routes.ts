import { CreateComponent } from './projects/create/create.component';
import { CreateUserComponent } from './projects/create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { Routes } from '@angular/router';
import { validateTokenGuard } from './projects/guard/validate-token.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'projects',
        canActivate: [validateTokenGuard],
        children: [
          {
            path: 'create',
            component: CreateComponent,
          },

          {
            path:'create-user',
            component: CreateUserComponent
          }
          ,
          {
            path: '',
            component: ProjectsComponent,
          },
        ],
      },
    ],
  },
];
