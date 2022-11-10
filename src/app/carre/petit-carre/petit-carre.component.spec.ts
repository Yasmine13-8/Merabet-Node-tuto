import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitCarreComponent } from './petit-carre.component';

describe('PetitCarreComponent', () => {
  let component: PetitCarreComponent;
  let fixture: ComponentFixture<PetitCarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetitCarreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetitCarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
