import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsmpleComponent } from './asmple.component';

describe('AsmpleComponent', () => {
  let component: AsmpleComponent;
  let fixture: ComponentFixture<AsmpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
