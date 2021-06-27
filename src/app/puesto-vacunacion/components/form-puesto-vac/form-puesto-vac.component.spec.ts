import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPuestoVacComponent } from './form-puesto-vac.component';

describe('FormPuestoVacComponent', () => {
  let component: FormPuestoVacComponent;
  let fixture: ComponentFixture<FormPuestoVacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPuestoVacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPuestoVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
