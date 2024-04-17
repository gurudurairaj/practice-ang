import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCompComponent } from './forms-comp.component';

describe('FormsCompComponent', () => {
  let component: FormsCompComponent;
  let fixture: ComponentFixture<FormsCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsCompComponent]
    });
    fixture = TestBed.createComponent(FormsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
