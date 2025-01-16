import { Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { FiveComponentComponent } from './five-component/five-component.component';
import { SixthComponentComponent } from './sixth-component/sixth-component.component';
import { EighthComponentComponent } from './eighth-component/eighth-component.component';
import { ContactoTdComponent } from './contacto-td/contacto-td.component';
import { ContactoReactiveComponent } from './contacto-reactive/contacto-reactive.component';
import { ConsumirImagenComponent } from './consumir-imagen/consumir-imagen.component';

export const routes: Routes = [
    { path: 'first-component', component: FirstComponentComponent},
    { path: 'second-component', component: SecondComponentComponent},
    { path: 'third-component', component: ThirdComponentComponent},
    { path: 'fourth-component', component: FourthComponentComponent},
    { path: 'five-component', component: FiveComponentComponent},
    { path: 'sixth-component', component: SixthComponentComponent},
    { path: 'eighth-component', component: EighthComponentComponent},
    { path: 'contacto-td', component: ContactoTdComponent},
    {path: 'contacto-reactive', component: ContactoReactiveComponent},
    {path: 'consumir-imagen', component: ConsumirImagenComponent},
];
