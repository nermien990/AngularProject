import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  constructor(storeName: String, storeLogo:String) {
    this.StoreName = storeName;
    this.StoreLogo = storeLogo;
   }

  //Discount: DiscountOffers= DiscountOffers['15 %'];
  StoreName: String="Amazon";
  StoreLogo: String = "";
  //ProductList: IProduct ;
  //CategoryList: ICategory;
  ClientName: String = "";
  IsPurshased: boolean = true;


  ngOnInit(): void {
  }

}
