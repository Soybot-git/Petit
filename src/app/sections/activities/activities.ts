import { Component } from '@angular/core';
import { textMap } from '../../textMap';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [],
  templateUrl: './activities.html',
  styleUrl: './activities.scss'
})
export class Activities {
  activities = textMap.activities;

  scrollToContacts(): void {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  }
}
