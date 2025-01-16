import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-five-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './five-component.component.html',
  styleUrl: './five-component.component.css',
})
export class FiveComponentComponent {
  constructor(private dataService: DataService) {}
  data: any[] = [];
  ngOnInit() {
    this.dataService.getData().subscribe((data: any[]) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
