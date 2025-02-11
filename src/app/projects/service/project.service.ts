import { catchError, lastValueFrom, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpRequest: HttpClient) {}

  public async getProjects(token: string) {
    const backendUrl = environment.backendUrl;
    const response: any = await lastValueFrom(
      this.httpRequest.get(`${backendUrl}/projects/get-all`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
      })
    );

    return response;
  }

  public async createProject(payload: { [key: string]: any }, token: string) {
    const backendUrl = environment.backendUrl;
    try {
      const response: any = await lastValueFrom(
        this.httpRequest.post(
          `${backendUrl}/projects/create`,
          {
            name: payload['name'],
            description: payload['description'],
            state: payload['state'],
          },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${token}`,
            },
          }
        )
      );
      return response;
    } catch (error) {
      throw new Error(`error ${error}`);
    }
  }

  public async deleteProject(id: string, token: string) {
    const backendUrl = environment.backendUrl;
    try {
      const response: any = await lastValueFrom(
        this.httpRequest.delete(
          `${backendUrl}/projects/delete/${id}`,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${token}`,
            },
          }
        )
      );
      return response;
    } catch (error) {
      throw new Error(`error ${error}`);
    }
  }

  public async createUser (payload: any, token: string){
    const backendUrl = environment.backendUrl;
    try {
      const response: any = await lastValueFrom(
        this.httpRequest.post(
          `${backendUrl}/user/create`,
          {
            email: payload['email'],
            password: payload['password'],
            role: payload['user']
          },
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${token}`,
            },
          }
        )
      );
      return response;
    } catch (error) {
      throw new Error(`error ${error}`);
    }
  }
}
