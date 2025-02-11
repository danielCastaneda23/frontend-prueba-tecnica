import { CanActivateFn, Router } from '@angular/router';
import { catchError, firstValueFrom, lastValueFrom, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { inject } from '@angular/core';

export const validateTokenGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const httpRequest = inject(HttpClient);
  const backendUrl = environment.backendUrl;
  const token = localStorage.getItem('token');

  if (!!token) {
    try {
      const res: { isValid: boolean } = await firstValueFrom(
        httpRequest.post<{isValid: boolean}>(
          `${backendUrl}/user/validate-token`,
          {
            token: token,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        )
      );
      return res.isValid;
    } catch (error) {
      return router.navigate(['dashboard/login']);
    }
  }
  return router.navigate(['dashboard/login']);
};
