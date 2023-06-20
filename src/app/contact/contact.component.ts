import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
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
      .pipe(
        tap(() => {
          console.log('Message sent successfully!');
          // Add any success message or further actions here
        }),
        catchError((error) => {
          console.error('An error occurred:', error);
          // Handle the error and display an error message
          throw error; // Rethrow the error to propagate it to the error handler
        })
      )
      .subscribe();
  }
}
