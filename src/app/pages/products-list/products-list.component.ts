import { Component, signal } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  stock?: number;
};

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  products = signal<Product[]>([
      {
        "id": 1,
        "title": "Leg Extension Machine",
        "price": 799.99,
        "image": "/images/27-028-hammer-strength-select-leg-extension-image-new.jpg",
        "stock": 10
      },
      {
        "id": 2,
        "title": "Barbell Bars (Set of 5)",
        "price": 89.99,
        "image": "/images/barbell-bars1.png",
        "stock": 5
      },
      {
        "id": 3,
        "title": "Chest Press Machine",
        "price": 299.99,
        "image": "/images/chest_press.jpg",
        "stock": 8
      },
      {
        "id": 4,
        "title": "Concept2 Rowing Machine",
        "price": 949.99,
        "image": "/images/concept2_rowerg.jpg",
        "stock": 12
      },
      {
        "id": 5,
        "title": "Dumbbells (Set of 5)",
        "price": 149.99,
        "image": "/images/dumbells.jpg",
        "stock": 15
      },
      {
        "id": 6,
        "title": "Foldable Treadmill",
        "price": 799.99,
        "image": "/images/foldable-treadmill.jpg",
        "stock": 7
      },
      {
        "id": 7,
        "title": "Leg Massage Machine",
        "price": 199.99,
        "image": "/images/leg_massgage.jpg",
        "stock": 10
      },
      {
        "id": 8,
        "title": "Men Compression Shirt",
        "price": 39.99,
        "image": "/images/Men-compression-shirt.jpg",
        "stock": 20
      },
      {
        "id": 9,
        "title": "Multigrip Bar",
        "price": 99.99,
        "image": "/images/Multigrip.jpg",
        "stock": 12
      },
      {
        "id": 10,
        "title": "Smith Machine",
        "price": 1399.99,
        "image": "/images/smith-machine.jpg",
        "stock": 3
      },
      {
        "id": 11,
        "title": "T-Shirt (Woman)",
        "price": 19.99,
        "image": "/images/t-shirt_woman.jpg",
        "stock": 50
      },
      {
        "id": 12,
        "title": "Weights (Set of 3)",
        "price": 59.99,
        "image": "/images/wheights.jpg",
        "stock": 30
      },
      {
        "id": 13,
        "title": "Yoga Mat",
        "price": 29.99,
        "image": "/images/Yoga-mat.jpg",
        "stock": 40
      }
    
    
    
  ]);
}
