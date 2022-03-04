import { IProduct } from './../Shared Classes and types/IProduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient // private productService: ProductService
  ) {}
  _url: string = '../../assets/Data/products.json';

  productList: IProduct[] = [];

  GetAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url).pipe(
      catchError((e) => {
        return throwError(e.mesage || 'Server Error');
      })
    );
  }

  ProductListID!: any;

  // GetProductById(prdId: Number): Observable<IProduct> {
  //   if (typeof prdId != 'number') return this.http.get<IProduct>(this._url);
  //   else {
  //     this.productService.GetAllProducts().subscribe((data) => {
  //       this.productList = data;
  //     });
  //     this.productList.filter((p) => {
  //       if (p.ID == prdId) this.ProductListID = p;
  //     });
  //     return this.ProductListID;
  //   }
  // }

  // GetProductById(prdId: Number) {
  //   if (typeof prdId != 'number') return null;
  //   else {
  //     this.productService.GetAllProducts().subscribe((data) => {
  //       this.productList = data;
  //     });
  //     this.productList.filter((p) => {});
  //     return this.ProductListID;
  //   }
  // }
}
