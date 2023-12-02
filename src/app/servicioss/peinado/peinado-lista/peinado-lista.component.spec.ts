import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeinadoListaComponent } from './peinado-lista.component';

describe('PeinadoListaComponent', () => {
  let component: PeinadoListaComponent;
  let fixture: ComponentFixture<PeinadoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeinadoListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeinadoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
