import { Component } from '@angular/core';
import { IntersectionRevealDirective } from '../../directives/intersection-reveal.directive';
import { textMap } from '../../textMap';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [IntersectionRevealDirective],
  templateUrl: './activities.html',
  styleUrl: './activities.scss'
})
export class Activities {
  activities = textMap.activities;

  scrollToContacts(): void {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  }
}
