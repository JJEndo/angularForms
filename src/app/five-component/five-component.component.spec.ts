import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveComponentComponent } from './five-component.component';

describe('FiveComponentComponent', () => {
  let component: FiveComponentComponent;
  let fixture: ComponentFixture<FiveComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
