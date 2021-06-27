import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;
  opened: boolean;

  fillerNav = [
    {route: 'dashboard', title: 'Home', icon: 'Home', class: ''},
    {route: 'personas', title: 'Ciudadanos', icon: 'person', class: ''},
    {route: 'citas', title: 'Citas', icon: 'receipt', class: ''},
    {route: 'puesto', title: 'Sitio', icon: 'building', class: ''},
  ];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit() {
    this.opened = true;
  }

}
