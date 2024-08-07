import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHearderComponent } from './book-hearder.component';

describe('BookHearderComponent', () => {
  let component: BookHearderComponent;
  let fixture: ComponentFixture<BookHearderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookHearderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookHearderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
