import { Component, OnInit } from '@angular/core';
// import { DiscountOffers } from './SharedClassesandtypes';

// import {DiscountOffers, IProduct, ICategory} from 'Shared Classes and types '

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(storeName: String, storeLogo: String) {
    this.StoreName = storeName;
    this.StoreLogo = storeLogo;
  }

  // Discount: DiscountOffers = DiscountOffers['No Discount'];
  StoreName: String = 'Amazon';
  StoreLogo: String = '';
  // ProductList: IProduct;
  // CategoryList: ICategory;
  ClientName: String = '';
  IsPurshased: boolean = true;

  // no = DiscountOffers['No Discount'];

  isPurchasedChange() {
    if (this.IsPurshased == false) {
      this.IsPurshased = true;
    }
  }
  ngOnInit(): void {}
}
