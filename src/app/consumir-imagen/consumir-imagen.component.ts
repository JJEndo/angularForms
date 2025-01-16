import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-consumir-imagen',
  imports: [NgFor],
  templateUrl: './consumir-imagen.component.html',
  styleUrl: './consumir-imagen.component.css'
})
export class ConsumirImagenComponent implements OnInit {

    carts: any[] = [];  
  
    constructor(private dataService: Data2Service) {}
  
    ngOnInit() {
      this.dataService.getData().subscribe((response: any) => {
        this.carts = response.carts;
        console.log(this.carts);
      });
  
    }
    shopping: string = '/shopping.svg'; 

}
