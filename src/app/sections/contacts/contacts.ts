import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IntersectionRevealDirective } from '../../directives/intersection-reveal.directive';
import { Model } from '../../shared/model/model';
import { textMap } from '../../textMap';

@Component({
  selector: 'app-contacts',
  imports: [ReactiveFormsModule, IntersectionRevealDirective, Model],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {
  private readonly fb = inject(FormBuilder);
  protected readonly contacts = textMap.contacts;
  protected readonly privacy = textMap.privacy;

  protected readonly isSubmitting = signal(false);
  protected readonly showToast = signal(false);
  protected readonly isModelOpen = signal(false);

  protected readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue]
  });

  protected onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.contactForm.reset();
      this.showToast.set(true);

      setTimeout(() => {
        this.showToast.set(false);
      }, 3000);
    }, 1200);
  }
}
