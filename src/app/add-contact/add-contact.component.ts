// src/app/add-contact/add-contact.component.ts
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]], // Basic phone validation
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([], Validators.required),
      longitude: [{ value: '', disabled: true }],
      latitude: [{ value: '', disabled: true }]
    });
  }

  get addresses() {
    return this.contactForm.get('addresses') as FormArray;
  }

  addAddress() {
    if (this.addresses.length < 5) {
      this.addresses.push(this.fb.control('', Validators.required));
    }
  }

  removeAddress(index: number) {
    if (this.addresses.length > 1) {
      this.addresses.removeAt(index);
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
