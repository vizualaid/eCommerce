import { product } from './../data-type';
// import { ProductsService } from './../service/products.service';
import { ProductsService } from '../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined| product[]
  constructor(private product:ProductsService) { }

  ngOnInit(): void {
    this.product.productList().subscribe((result)=>
    {
      console.warn(result);
      this.productList=result;
    })
  }

}
