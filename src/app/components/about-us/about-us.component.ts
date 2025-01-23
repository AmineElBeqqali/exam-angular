// about-us.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
    <section class="about-us">
      <div class="about-us-container">
        <h1>About Us</h1>
        <p>Welcome to the Fitness Store! We offer a variety of gym equipment to help you achieve your fitness goals.</p>
        <p>We provide top-quality equipment to enhance your workouts and help you become stronger and healthier.</p>
      </div>
    </section>
  `,
  styleUrls: ['./about-us.component.css']  // You can still use a separate CSS file for styles
})
export class AboutUsComponent {
  // You can add any logic here if required
}
