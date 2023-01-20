import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {LogIn, SignUp} from '../data-type';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLogedIn=new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false)
//api call
  constructor(private http:HttpClient,private router:Router) { }
  userSignUp(data:SignUp){
    // console.warn("service called")
  this.http
  .post('http://localhost:3000/seller',data,{observe:'response'})
  .subscribe((result)=>{
    this.isSellerLogedIn.next(true);
    localStorage.setItem('seller',JSON.stringify(result.body))
    this.router.navigate(['seller-home'])
    console.warn('result',result);
  });
  // return false;
    }
    reloadSeller(){
      if(localStorage.getItem('seller')){
        this.isSellerLogedIn.next(true);
        this.router.navigate(['seller-home'])
      }
    }
    userLogIn(data:LogIn){
      console.warn(data);
      //api call code will 
      this.http
      .get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:"response"})
      .subscribe((result:any)=>{
        console.warn(result);
        if(result && result.body && result.body.length){
          console.warn("User Loged In");
          this.isSellerLogedIn.next(true);
          localStorage.setItem('seller',JSON.stringify(result.body))
          this.router.navigate(['seller-home'])
          console.warn('result',result);

        }
        else 
        { 
          this.isLoginError.emit(true);
          console.warn("Log In failed");
          
        }
      })
    }
  }

