import { Component } from '@angular/core';
import { IntersectionRevealDirective } from '../../directives/intersection-reveal.directive';
import { textMap } from '../../textMap';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [IntersectionRevealDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  services = textMap.services;
}
