import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPuestosVacComponent } from './list-puestos-vac.component';

describe('ListPuestosVacComponent', () => {
  let component: ListPuestosVacComponent;
  let fixture: ComponentFixture<ListPuestosVacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPuestosVacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPuestosVacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
