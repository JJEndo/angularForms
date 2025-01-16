import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-td',
  imports: [FormsModule],
  templateUrl: './contacto-td.component.html',
  styleUrl: './contacto-td.component.css',
})
export class ContactoTdComponent {
  onSubmit(form: any): void {
    if (form.valid) {
      // Mostrar una ventana emergente
      alert('¡Tus datos han sido enviados correctamente!');

      // Mostrar los datos en consola
      console.log('Correo Electrónico:', form.value.email);
      console.log('Asunto:', form.value.subject);
      console.log('Mensaje:', form.value.message);
      console.log('Política de privacidad aceptada:', form.value.privacyPolicy);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
