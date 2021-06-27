import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCitasVacComponent } from './components/list-citas-vac/list-citas-vac.component';
import { FormCitasVacComponent } from './components/form-citas-vac/form-citas-vac.component';
import { InfoCitasVacComponent } from './components/info-citas-vac/info-citas-vac.component';



@NgModule({
  declarations: [ListCitasVacComponent, FormCitasVacComponent, InfoCitasVacComponent],
  imports: [
    CommonModule
  ]
})
export class CitaVacunacionModule { }
