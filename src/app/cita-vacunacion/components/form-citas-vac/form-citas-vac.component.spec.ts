import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCitasVacComponent } from './form-citas-vac.component';

describe('FormCitasVacComponent', () => {
  let component: FormCitasVacComponent;
  let fixture: ComponentFixture<FormCitasVacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCitasVacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCitasVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
