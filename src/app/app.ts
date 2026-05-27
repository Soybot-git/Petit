import { Component, signal } from '@angular/core';
import { Home } from './sections/home/home';
import { Activities } from './sections/activities/activities';
import { ServicesComponent } from './sections/services/services';
import { Contacts } from './sections/contacts/contacts';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Home, Activities, ServicesComponent, Contacts, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Petit');
}
