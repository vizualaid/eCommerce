import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {SignUp} from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
//api call
  constructor(private http:HttpClient) { }
  userSignUp(data:SignUp){
    // console.warn("service called")
  return this.http.post('http://localhost:3000/seller',data)

    }
  }

