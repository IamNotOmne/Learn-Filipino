import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashBComponent } from './student-dash-b.component';

describe('StudentDashBComponent', () => {
  let component: StudentDashBComponent;
  let fixture: ComponentFixture<StudentDashBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
