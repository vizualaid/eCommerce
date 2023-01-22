import { product } from './../data-type';
import { ProductsService } from '../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: string | undefined;
  constructor(private product:ProductsService) {}
  // constructor(private product:ProductsService){ }
 
  ngOnInit(): void {}

  submit(data:product) {

    this.product.addProduct(data).subscribe((result)=>{
      console.warn(data);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
      }
      setTimeout(() => 
      {  this.addProductMessage=undefined }, 3000);
      
    })
   
  }
 
}
