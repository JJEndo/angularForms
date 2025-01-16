import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthComponentComponent } from './eighth-component.component';

describe('EighthComponentComponent', () => {
  let component: EighthComponentComponent;
  let fixture: ComponentFixture<EighthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EighthComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EighthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
