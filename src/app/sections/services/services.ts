import { Component } from '@angular/core';
import { textMap } from '../../textMap';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  services = textMap.services;
}
