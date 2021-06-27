import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContentComponent } from './components/content/content.component';
import { RouterModule } from '@angular/router';

//Material


@NgModule({
  declarations: [SidenavComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule,

    //Material

  ]
})
export class LayoutModule { }
