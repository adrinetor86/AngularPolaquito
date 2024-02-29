import { Component } from '@angular/core';
import { PolandThingsComponent } from '../poland-things/poland-things.component';
import {CommonModule} from "@angular/common";
import { Polacothings } from '../polacothings';

//LO DEJE EN LA 9
@Component({
  selector: 'app-polaco',
  standalone: true,
  imports: [CommonModule,PolandThingsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by object">
        <button class="primary" type="button">Search</button>

      </form>
      <app-poland-things
        *ngFor="let polacothings of PolacothingsList"
        [polacothings]="polacothings" >

      </app-poland-things>
    </section>


  `,
  styleUrl: './polaco.component.css'
})

export class PolacoComponent {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  PolacothingsList: Polacothings[] =[
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      power: 'Chicago',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      power: 'Santa Monica',

      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,

    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      power: 'Juneau',

      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,

    },
    {
      id: 3,
      name: 'Homesteady Housing',
      power: 'Chicago',

      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,

    },
    {
      id: 4,
      name: 'Happy Homes Group',
      power: 'Gary',

      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,

    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      power: 'Oakland',

      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,

    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      power: 'Oakland',

      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,

    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      power: 'Oakland',

      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,

    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      power: 'Oakland',

      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,

    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      power: 'Portland',

      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,

    }
  ];

}

