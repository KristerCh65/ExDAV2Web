import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { ListPersonasComponent } from './components/list-personas/list-personas.component';



@NgModule({
  declarations: [FormPersonaComponent, ListPersonasComponent],
  imports: [
    CommonModule
  ]
})
export class PersonaModule { }
