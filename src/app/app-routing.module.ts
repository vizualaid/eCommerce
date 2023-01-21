import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { CartComponent } from './cart/cart.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AboutComponent } from './about/about.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSellerGuard } from './auth-seller.guard';

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
},
{
  path:'seller-auth',
  component: SellerAuthComponent,
},
{
  path:'seller-home',
  component: SellerHomeComponent,
  canActivate:[AuthSellerGuard]
},
{
  path:'about',
  component: AboutComponent,
},
{
  path:'cart',
  component: CartComponent,
},
{
  path:'seller-add-product',
  component: SellerAddProductComponent,
  canActivate:[AuthSellerGuard]
},

// {
//   path:'user',
//   component: UserCom,
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
