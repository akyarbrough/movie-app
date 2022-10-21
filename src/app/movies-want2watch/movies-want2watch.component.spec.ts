import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesWant2watchComponent } from './movies-want2watch.component';

describe('MoviesWant2watchComponent', () => {
  let component: MoviesWant2watchComponent;
  let fixture: ComponentFixture<MoviesWant2watchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesWant2watchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesWant2watchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
