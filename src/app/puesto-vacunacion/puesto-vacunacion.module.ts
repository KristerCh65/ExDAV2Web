import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPuestoVacComponent } from './components/form-puesto-vac/form-puesto-vac.component';
import { ListPuestosVacComponent } from './components/list-puestos-vac/list-puestos-vac.component';



@NgModule({
  declarations: [FormPuestoVacComponent, ListPuestosVacComponent],
  imports: [
    CommonModule
  ]
})
export class PuestoVacunacionModule { }
