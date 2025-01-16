import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto-reactive.component.html',
  styleUrl: './contacto-reactive.component.css',
})
export class ContactoReactiveComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar el formulario reactivo
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Mostrar una ventana emergente
      alert('¡Tus datos han sido enviados correctamente!');

      // Mostrar los datos en consola
      console.log('Correo Electrónico:', this.contactForm.value.email);
      console.log('Asunto:', this.contactForm.value.subject);
      console.log('Mensaje:', this.contactForm.value.message);
      console.log(
        'Política de privacidad aceptada:',
        this.contactForm.value.privacyPolicy
      );
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
