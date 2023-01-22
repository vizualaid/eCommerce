import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
// import { AddProductComponent } from './add-product/add-product.component';
// import { AddComponentComponent } from './add-component/add-component.component';
import { ProductsService } from './service/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // NavbarComponent,
    HomeComponent,
    SellerAuthComponent,
    AboutComponent,
    CartComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    // AddProductComponent,
    // AddComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule, FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
