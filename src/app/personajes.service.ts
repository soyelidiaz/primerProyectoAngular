import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(
    private http:HttpClient
  ) { }
  getAllAsync(){
    return this.http.get("https://ghibliapi.herokuapp.com/films/")
   }
   getById(id:String){
    return this.http.get("https://ghibliapi.herokuapp.com/films/"+id)
   }
}
