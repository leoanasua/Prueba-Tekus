import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'devices', component: CardsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
