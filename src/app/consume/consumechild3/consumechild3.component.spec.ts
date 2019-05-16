import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumechild3Component } from './consumechild3.component';

describe('Consumechild3Component', () => {
  let component: Consumechild3Component;
  let fixture: ComponentFixture<Consumechild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consumechild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consumechild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
