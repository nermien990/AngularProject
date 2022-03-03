import { ICategory } from './../Shared Classes and types/ICategory';
import { IProduct } from './../Shared Classes and types/IProduct';
import { DiscountOffers } from './../Shared Classes and types/DiscountOffers';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {
    this.Discount = DiscountOffers['No Discount'];
    this.StoreName = 'Amazon';
    this.StoreLogo = 'assets/images/photo-1.jpg';
    this.CategoryList = [
      { ID: 1, Name: 'Dress' },
      { ID: 2, Name: 'Hat' },
      { ID: 3, Name: 'Shoes' },
    ];
  }

  Discount: DiscountOffers;
  StoreName: String;
  StoreLogo: String;
  ProductList: IProduct[] = [];
  CategoryList: ICategory[];
  ClientName: String = '';
  IsPurshased: boolean = true;

  no = DiscountOffers['No Discount'];

  ProductID: any;

  isPurchasedChange() {
    if (this.IsPurshased == false) {
      this.IsPurshased = true;
    }
  }
  ngOnInit(): void {
    this.ProductList = this.productService.GetAllProducts();
    this.ProductID = this.productService.GetProductById(1);
  }

  renderValues() {
    return (this.ProductList = this.productService.GetAllProducts());
  }
}
