import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../personajes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint:any=[]
  personajesAsync:any=[]
  personajes:any=[]
  constructor(
    private personajesService:PersonajesService
  ) { 
    this.personajesAsync=this.personajes=this.personajesService.getAllAsync()
  }
    
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 500 && window.innerWidth > 400) ? 2 : 4; 
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 2 : 4;
  }

}
