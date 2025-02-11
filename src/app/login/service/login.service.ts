import { catchError, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpRequest: HttpClient, private router: Router) { }

  public login = (payload: {[key:string]: string}) => {
    console.log('LOGGING SERVICE RUNNING', payload)
    const backendUrl = environment.backendUrl
    this.router.navigate(['dashboard/projects'])
    // this.httpRequest
    //   .post(
    //     `${backendUrl}/login`,
    //     {
    //       email: payload['email'],
    //       password: payload['password'],
    //     },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //       },
    //     }
    //   )
    //   .pipe(
    //     catchError((error: any) => {
    //       console.log('LOGIN FAILED', error.error.message);
    //       return of(error.error.message);
    //     })
    //   )
    //   .subscribe((res: any) => {
    //     if (res && res.token) {
    //       localStorage.setItem('token', res.token);
    //       this.router.navigate(['/dashboard/shortlink']);
    //     }
    //   });
  }
}
