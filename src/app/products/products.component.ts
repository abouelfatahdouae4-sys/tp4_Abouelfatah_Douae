import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchQuery: string = '';
  newName: string = '';
  newPrice: number | null = null;
  nextId: number = 5;

  products: Product[] = [
    { id: 1, name: 'Computer', price: 4300 },
    { id: 2, name: 'Printer', price: 3255 },
    { id: 3, name: 'Smartphone', price: 2100 },
    { id: 4, name: 'Mouse', price: 111 },
  ];

  get filteredProducts(): Product[] {
    if (!this.searchQuery.trim()) return this.products;
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }

  addProduct(): void {
    if (!this.newName.trim() || this.newPrice === null || this.newPrice < 0) return;
    this.products.push({ id: this.nextId++, name: this.newName.trim(), price: this.newPrice });
    this.newName = '';
    this.newPrice = null;
  }
}
