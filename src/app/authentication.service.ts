import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;

  get getToken(): string {
    return this.token;
  }

  constructor(private apiService: ApiService) { }

  async login() {
    const loginData = {
      username: 'herb',
      password: 'appPass'
    };

    await this.apiService.post('auth/signup', loginData);

    const response = await this.apiService.post('auth/login', loginData);
    this.token = response.token;
  }
}
