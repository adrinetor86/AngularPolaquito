import { Component,Input } from '@angular/core';
import {CommonModule} from "@angular/common";
import { Polacothings } from '../polacothings';
@Component({
  selector: 'app-poland-things',
  standalone: true,
  imports: [ CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="polacothings.photo" alt="Exterior photo of {{polacothings.name}}">
      <h2 class="listing-heading">{{ polacothings.name }}</h2>
      <p class="listing-power">{{ polacothings.power}}</p>
    </section>
  `,
  styleUrl: './poland-things.component.css'
})

export class PolandThingsComponent {
  @Input() polacothings!: Polacothings;
}
