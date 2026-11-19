import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;
 
  
  constructor(private fb: FormBuilder, private router: Router) {  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });  
  }
  onLogin(){
    debugger;
    if(this.loginForm.invalid){
      alert('Please fill in all required fields');
    return;
  }

  const username = this.loginForm.value.username;
  const password = this.loginForm.value.password;

  if(username === 'a' &&
     password === 'a')
  {
      this.loginForm.reset();
      this.router.navigate(['/admin/dashboard']);
  }
  else
  {
      alert('Invalid Credentials');
  }

  }
}
