import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <button class="text-2xl" routerLink="/">HOME</button>
      
      <!-- About Us Link -->
      <button class="text-2x1 text-lg" routerLink="/about-us">About Us</button>

      <!-- Cart Button -->
      <app-primary-button label="{{ cartLabel() }}" routerLink="/cart" />
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  cartService = inject(CartService);

  cartLabel = computed(() => `Cart (${this.cartService.cart().length})`);
}
