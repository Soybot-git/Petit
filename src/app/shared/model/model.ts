import { Component, input, output, HostListener } from '@angular/core';

@Component({
  selector: 'app-model',
  standalone: true,
  templateUrl: './model.html',
  styleUrl: './model.scss'
})
export class Model {
  title = input.required<string>();
  text = input.required<string>();
  closed = output<void>();

  onClose(): void {
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closed.emit();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closed.emit();
  }
}
