import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-sixth-component',
  imports: [NgFor],
  templateUrl: './sixth-component.component.html',
  styleUrl: './sixth-component.component.css',
  
})
export class SixthComponentComponent implements OnInit {
  carts: any[] = [];  

  constructor(private dataService: Data2Service) {}

  ngOnInit() {
    this.dataService.getData().subscribe((response: any) => {
      this.carts = response.carts;
      console.log(this.carts);
    });

  }

}
