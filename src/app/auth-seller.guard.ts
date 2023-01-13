import { SellerService } from './service/seller.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSellerGuard implements CanActivate {
  constructor(private sellerService:SellerService){}
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //redirecting condition
    if(localStorage.getItem('seller')){
      return true; 
    }
    return this.sellerService.isSellerLogedIn;
  }

   

  
}
