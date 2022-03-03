import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  personajes:any
  constructor(
    private activateRoute:ActivatedRoute,
    private personajesService:PersonajesService
  ) { 
    const id = this.activateRoute.snapshot.paramMap.get("id")
   if(id) 
    {this.personajesService.getById(id)
    .subscribe(data=>{
      this.personajes=data
    })
  }
  }

  ngOnInit(): void {
  }

}
