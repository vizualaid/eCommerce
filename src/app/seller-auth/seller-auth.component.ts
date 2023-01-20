import { LogIn } from './../data-type';
import { SellerService } from './../service/seller.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SignUp } from '../data-type';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService, private router:Router) { }
  showLogin=false;
  authError:string='';
  ngOnInit():void{
    this.seller.reloadSeller();
  }


  signUp(data:SignUp):void{
  console.warn(data)
  this.seller.userSignUp(data)
  // .subscribe((result)=>{
  //   console.warn(result);
  //   if(result){
  //     //redirect
  //     this.router.navigate(['seller-home'])
  //   }
  // });
  }
  openLogin(){
    this.showLogin=true;

  }
  openSignup(){
    this.showLogin=false;
  }
  // #sellerlogin
  login(data:LogIn):void{
    this.authError="";
    console.warn(data)
    // this.seller.userSignUp(data)
    this.seller.userLogIn(data);
    
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password Incorrect";
      }
    }
    )  
    }
}
