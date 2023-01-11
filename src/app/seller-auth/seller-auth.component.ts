import { SellerService } from './../service/seller.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService, private router:Router) { }

  ngOnInit(): void {  }

  signUp(data:SignUp):void{
  // console.warn(data)
  this.seller.userSignUp(data)
  // .subscribe((result)=>{
  //   console.warn(result);
  //   if(result){
  //     //redirect
  //     this.router.navigate(['seller-home'])
  //   }
  // });
  }

}
