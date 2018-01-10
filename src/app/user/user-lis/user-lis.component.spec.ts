import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLisComponent } from './user-lis.component';

describe('UserLisComponent', () => {
  let component: UserLisComponent;
  let fixture: ComponentFixture<UserLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
