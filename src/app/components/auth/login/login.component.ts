import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: string = '';
  constructor(private _auth: AuthService, private _router: Router) {}
  ngOnInit(): void {
    this._auth._isLogged() && this._router.navigate(['/home'])
  }
  login: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  loginAction() {
    this._auth.signin(this.login.value).subscribe({
      next: (data: any) => {
        localStorage.setItem('access_token', data.accessToken);
        localStorage.setItem('role', data.user.role);
        this._router.navigate(['/home']);
      },
      error: (e:any) => {
        this.errorMessage = e.error;
      },
    });
  }
}
