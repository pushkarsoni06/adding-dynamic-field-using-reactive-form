import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstReactiveFormComponent } from './first-reactive-form.component';

describe('FirstReactiveFormComponent', () => {
  let component: FirstReactiveFormComponent;
  let fixture: ComponentFixture<FirstReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
