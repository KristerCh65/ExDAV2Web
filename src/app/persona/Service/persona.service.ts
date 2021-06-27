import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Persona } from '../Model/persona';

import { LayoutModule } from 'src/app/layout/layout.module';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  urlController = 'Persona';
  apiUrl = environment.api_url;

  constructor(
    private http: HttpClient,
  ) { }

  RegistroPersona(persona: FormData){
    return this.http.post<FormData>(this.apiUrl + this.urlController, persona);
  }

  obtenerDniPersona(dni: number){
    return this.http.get<Persona>(this.apiUrl + this.urlController + '/' + dni);
  }

  obtenerPersonas(){
    return this.http.get<Persona[]>(this.apiUrl + this.urlController);
  }

  editarPersona(id: number, persona: Persona){
    return this.http.put<Persona>(this.apiUrl + this.urlController + '/' + id, persona);
  }

}
