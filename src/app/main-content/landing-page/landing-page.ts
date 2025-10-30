import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-landing-page',
  imports: [Navbar],
  template: `
    <section class="fontFamily">
      <div>
        <app-navbar></app-navbar>
      </div>
      <h1>SAKURA RAMEN</h1>
      <h2>BEST RAMEN IN TOWN</h2>
    </section>
  `,
  styleUrl: './landing-page.scss',
})
export class LandingPage {

}
