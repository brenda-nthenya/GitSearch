import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRepositoriesComponent } from './display-repositories.component';

describe('DisplayRepositoriesComponent', () => {
  let component: DisplayRepositoriesComponent;
  let fixture: ComponentFixture<DisplayRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayRepositoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
