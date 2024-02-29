import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PolacoComponent} from './polaco/polaco.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PolacoComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/Bandera.png" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-polaco></app-polaco>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'PruebaPolaquitoAngular';
}

