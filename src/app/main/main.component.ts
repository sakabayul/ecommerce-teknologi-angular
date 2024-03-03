import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../../assets/list-data/products';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  // Mengambil Data Products Dan Dipecah
  products = [...products];

  filteredProducts: products[] = []; // Produk hasil pencarian
  search(searchKeyword: string) {
    // Logika pencarian di sini
    // Misalnya, filter produk berdasarkan kata kunci
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }
  
  // Mengambil Data Products Sesuai Type
  getSmartphoneData(): products[] {
    return this.products.filter(item => item.type === 'Smartphone');
  }
  getTabletData(): products[] {
    return this.products.filter(item => item.type === 'Tablet');
  }
  getDesktopData(): products[] {
    return this.products.filter(item => item.type === 'Desktop');
  }
}
