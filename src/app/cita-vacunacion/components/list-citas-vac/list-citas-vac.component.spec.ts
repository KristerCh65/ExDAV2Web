import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCitasVacComponent } from './list-citas-vac.component';

describe('ListCitasVacComponent', () => {
  let component: ListCitasVacComponent;
  let fixture: ComponentFixture<ListCitasVacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCitasVacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCitasVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
