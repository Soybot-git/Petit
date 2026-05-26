import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

/**
 * Aggiunge la classe CSS 'is-visible' all'elemento host
 * quando entra nel viewport tramite IntersectionObserver.
 * Il trigger avviene una sola volta.
 */
@Directive({
  selector: '[appIntersectionReveal]'
})
export class IntersectionRevealDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('is-visible');
            this.observer?.disconnect();
            this.observer = null;
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
