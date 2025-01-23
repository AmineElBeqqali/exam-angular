// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../pages/products-list/data/product.model';  // Make sure the product model is correctly imported

@Injectable({
  providedIn: 'root'  // This ensures the service is available throughout the app
})
export class ProductService {
  private productsUrl = 'assets/data/products.json';  // Correct path to the JSON file

  constructor(private http: HttpClient) {}

  // This method fetches the products from products.json
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);  // Return the data as an observable
  }
}