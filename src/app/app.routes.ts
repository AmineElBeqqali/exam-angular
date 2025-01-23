// app.routes.ts
import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { AboutUsComponent } from './components/about-us/about-us.component';  // Make sure the import path is correct

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductsListComponent,  // Home page will show the product list
  },
  {
    path: 'cart',
    component: CartComponent,  // Cart page
  },
  {
    path: 'about-us',  // Path to access the About Us page
    component: AboutUsComponent,  // Component to display for the About Us page
  }
];
