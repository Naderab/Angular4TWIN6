import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'http://localhost:3000';
  constructor(private _http: HttpClient,private _router:Router) {}

  signin(body: any) {
    return this._http.post(`${this.baseUrl}/signin`, body);
  }

  _isLogged(): Boolean {
    return !!localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    this._router.navigate(['/login']);
  }
}
