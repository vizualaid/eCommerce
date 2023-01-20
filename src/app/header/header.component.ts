import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }
  menuType: String='default';
  ngOnInit(): void {
  
    this.route.events.subscribe((val:any)=>{
    if(val.url){
      if(localStorage.getItem('seller')&& val.url.includes('seller')){
        console.warn("is seller area");
        this.menuType='seller';
      }
      else{
        this.menuType='default';
        console.warn("is outside seller area");
        this.menuType='default';
      }
    }
  })
  }

}



