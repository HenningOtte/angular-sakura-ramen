import { Component } from '@angular/core';
import { LandingPage } from './landing-page/landing-page';
import { OurMenu } from './our-menu/our-menu';
import { HowToOrder } from './how-to-order/how-to-order';


@Component({
  selector: 'app-maincontent',
  imports: [
    LandingPage,
    OurMenu,
    HowToOrder
  ],
  templateUrl: './maincontent.html',
  styleUrl: './maincontent.scss',
})
export class Maincontent {

}
