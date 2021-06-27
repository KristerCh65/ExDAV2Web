import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from './layout/components/content/content.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {path: '',
  component: ContentComponent,
  children: [
    {path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'personas',
  loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule)},
  {path: 'citas',
  loadChildren: () => import('./cita-vacunacion/cita-vacunacion.module').then(m => m.CitaVacunacionModule)},
  {path: 'puesto',
  loadChildren: () => import('./puesto-vacunacion/puesto-vacunacion.module').then(m => m.PuestoVacunacionModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
