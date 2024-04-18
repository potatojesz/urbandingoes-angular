import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: EventsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
];