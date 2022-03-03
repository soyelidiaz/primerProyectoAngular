import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  
})

export class RegistroComponent implements OnInit {
miFormulario:FormGroup
  constructor(
    private formulario:FormBuilder
  ) { 
    this.miFormulario = this.formulario.group({
      nombre:["",[Validators.required]],
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

