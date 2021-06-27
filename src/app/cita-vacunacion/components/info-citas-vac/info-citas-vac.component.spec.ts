import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCitasVacComponent } from './info-citas-vac.component';

describe('InfoCitasVacComponent', () => {
  let component: InfoCitasVacComponent;
  let fixture: ComponentFixture<InfoCitasVacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCitasVacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCitasVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
