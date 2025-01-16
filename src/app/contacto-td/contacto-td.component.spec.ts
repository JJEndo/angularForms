import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoTdComponent } from './contacto-td.component';

describe('ContactoTdComponent', () => {
  let component: ContactoTdComponent;
  let fixture: ComponentFixture<ContactoTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoTdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
