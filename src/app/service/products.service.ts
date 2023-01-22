import { product } from './../data-type';
// import { AddProductComponent } from './../add-product/add-product.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  addProduct(data: product) {
    return this.http.post('http://localhost:3000/products', data);
  }
  // constructor(private http:HttpClient) { }
  // addProduct(data:product){
  //   // console.log("Servive Products Called");
  //   this.http.post('http://localhost:3000/products',data);
  // }
  productList(){
    return this.http.get('http://localhost:3000/products')
  }
}
