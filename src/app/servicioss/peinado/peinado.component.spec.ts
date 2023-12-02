import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeinadoComponent } from './peinado.component';

describe('PeinadoComponent', () => {
  let component: PeinadoComponent;
  let fixture: ComponentFixture<PeinadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeinadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeinadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
