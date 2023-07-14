import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;

  constructor(private http: HttpClient) {}

  submitForm(): void {
    const formData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      message: this.message,
    };
    this.http
      .post(
        'https://backend-for-family-youth-wellbeing.onrender.com/contact',
        formData,
        { responseType: 'text' }
      )
      .subscribe(
        (response: any) => {
          console.log('Message sent successfully!', response);
          // Handle the response here
        },
        (error) => {
          console.error('An error occurred:', error);
          // Handle the error and display an error message
        }
      );
  }
}
