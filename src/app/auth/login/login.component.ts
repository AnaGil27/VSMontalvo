import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required, Validators.pattern('[A-Za-z0-9]+')],
      password: ['', Validators.required, Validators.minLength(4)]
    });
  }

  onSubmit():void {
    this.router.navigate(["servicioss"]);
  }
}
