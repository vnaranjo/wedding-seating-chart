import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuestListComponent } from './guest/guest-list.component';

const routes: RouterConfig = [
  {
    path: 'home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: 'guest',
    component: GuestListComponent,
    useAsDefault: true
  },
  {
      path: '', 
      component: HomeComponent
  }
];
export const appRouterProviders = [
  provideRouter(routes)
];