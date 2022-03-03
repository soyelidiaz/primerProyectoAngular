import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario:FormGroup
  constructor(
    private formulario:FormBuilder
  ) { 
    this.miFormulario = this.formulario.group({
      email:["",[Validators.required,Validators.email]],
      clave:["",[Validators.required,Validators.minLength(8)]],
    })
  }
registrarse () {
  console.log(this.miFormulario.value)
}
  ngOnInit(): void {
  }
  hide = true;
}
