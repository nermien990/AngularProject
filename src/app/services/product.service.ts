import { IProduct } from './../Shared Classes and types/IProduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  productList: Array<IProduct> = [
    {
      ID: 1,
      Name: 'juket',
      Quantity: 2,
      Price: 40,
      Img: '../../assets/images/photo-1.jpg',
    },
    {
      ID: 2,
      Name: 'back',
      Quantity: 2,
      Price: 100,
      Img: 'assets/images/photo-1.jpg',
    },
  ];

  GetAllProducts() {
    return this.productList;
  }

  ProductListID!: any;

  GetProductById(prdId: Number) {
    if (typeof prdId != 'number') return null;
    else {
      this.productList.filter((p) => {
        if (p.ID == prdId) this.ProductListID = p;
      });
      return this.ProductListID;
    }
  }
}
