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
    <form>
      <input type="text" placeholder="Filter by object">
      <button class="primary" type="button">Search</button>


    </form>
    <section>


      <app-poland-things
        *ngFor="let polacothings of PolacothingsList"
        [polacothings]="polacothings" >

      </app-poland-things>
    </section>


  `,
  styleUrl: 'polaco.component.css'
})

export class PolacoComponent {

   PolacothingsList: Polacothings[] =[
    {
      id: 0,
      name: 'VODKA',
      power: '150',
      photo: 'https://licorcash.es/cdn/shop/products/MH026_belvedere-vodka_6000_mit-licht_1024x1024@2x.jpg?v=1620825577',
    },
    {
      id: 1,
      name: 'BOBR',
      power: '99',
      photo: `../assets/bobr.png`,

    },
    {
      id: 2,
      name: 'AUDI',
      power: '80',
      photo: `https://cdn.classicdigest.com/live/carimg/133001_133100/133017_24c324fd51a29f0d.jpg`,

    },
    {
      id: 3,
      name: 'PIEROGIS',
      power: '250',
      photo: `https://imag.bonviveur.com/pierogi.webp`,

    },
    {
      id: 4,
      name: 'CASA',
      power: '20',
      photo: `https://mymodernmet.com/wp/wp-content/uploads/2017/01/Zalipie-Poland-Painted-Houses-10.jpg`,

    },
    {
      id: 5,
      name: 'PIWO',
      power: '100',
      photo: `https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_524,h_524/v1696459926/42407.png`,

    },
    {
      id: 6,
      name: 'LEWANDOWSKI',
      power: '70',
      photo: `https://assets.laliga.com/squad/2023/t178/p56764/256x278/p56764_t178_2023_1_001_000.png`,

    },
    {
      id: 7,
      name: 'LOTTO',
      power: '20',

      photo: `https://www.pap.pl/sites/default/files/styles/main_image/public/202106/39624323_36553092.jpg?itok=T9HqoQPw`,

    },
    {
      id: 8,
      name: 'ZABKA',
      power: '120',

      photo: `https://notesfrompoland.com/wp-content/uploads/2022/10/sklep-we-wroclawiu-1080x675.png`,

    },
    {
      id: 9,
      name: 'PIS',
      power: '10',

      photo: `https://pis.org.pl/uploads/cache/news_single/uploads/media/news/0001/36/28f6f84dd6aa9cec23ebb6340324802ec4efb458.jpeg`,

    }
  ];

}

