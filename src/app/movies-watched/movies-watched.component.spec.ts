import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWatchedComponent } from './movies-watched.component';

describe('MoviesWatchedComponent', () => {
  let component: MoviesWatchedComponent;
  let fixture: ComponentFixture<MoviesWatchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesWatchedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesWatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
