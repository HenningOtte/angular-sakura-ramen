import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Maincontent } from './main-content/maincontent';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Maincontent,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sakura');
}
