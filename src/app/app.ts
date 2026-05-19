import { Component, signal } from '@angular/core';
import { Home } from './sections/home/home';
import { Activities } from './sections/activities/activities';
import { Services } from './sections/services/services';
import { Contacts } from './sections/contacts/contacts';

@Component({
  selector: 'app-root',
  imports: [Home, Activities, Services, Contacts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Petit');
}
