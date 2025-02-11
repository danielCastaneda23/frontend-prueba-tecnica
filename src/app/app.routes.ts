import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'dashboard',
         children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'projects',
                component: ProjectsComponent
            }
        ]
    }
];
