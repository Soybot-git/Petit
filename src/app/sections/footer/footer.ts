import { Component, signal } from '@angular/core';
import { Model } from '../../shared/model/model';
import { textMap } from '../../textMap';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Model],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  protected readonly footerText = textMap.footer;
  protected readonly privacy = textMap.privacy;
  protected readonly isModelOpen = signal(false);
}
