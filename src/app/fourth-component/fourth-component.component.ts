import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../client';


@Component({
  selector: 'app-fourth-component',
  standalone: true,
  imports: [FormsModule, NgStyle, NgFor],
  templateUrl: './fourth-component.component.html',
  styleUrl: './fourth-component.component.css',
})
export class FourthComponentComponent {
  message: string = 'This is the fourth component';
  currentStyles: Record<string, string> = {
    'background-color': '#007bff',
    color: '#fff',
    'font-size': '1.5rem',
    'font-style': 'italic',
  };

  products = [
    'product1',
    'product2',
    'product3',
    'product4',
    'product5',
    'product6',
    'product7',
    'product8',
    'product9',
    'product10',
  ];

  clients: Client[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      active: true,
    },
    {
      id: 2,
      name: 'Jane Doe2',
      email: 'jane2@example.com',
      active: false,
    },
    {
      id: 3,
      name: 'Jane Doe3',
      email: 'jane3@example.com',
      active: true,
    },
  ];
}
