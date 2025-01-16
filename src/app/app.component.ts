import { Component, Type } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HijoComponent, RouterLink, RouterLinkActive, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tour-of-heroes';
}

