import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eighth-component',
  imports: [FormsModule],
  templateUrl: './eighth-component.component.html',
  styleUrl: './eighth-component.component.css'
})
export class EighthComponentComponent {

  user = {

    name: '',

    email: '',

    password: ''

  };

  onSubmit(form: any): void {

    console.log('Form submitted:', form);

  }

}
