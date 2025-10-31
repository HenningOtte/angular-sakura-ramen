import { Routes } from '@angular/router';
import { Maincontent } from './main-content/maincontent';
import { Imprint } from './imprint/imprint';

export const routes: Routes = [
    { path: '', component: Maincontent },
    { path: 'imprint', component: Imprint }
];