//I'm having to make significant changes to the code 
//that I cloned to make it follow the tutorial. No problems so far. 
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
//The below import isn't used in the tutorial.
//import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/