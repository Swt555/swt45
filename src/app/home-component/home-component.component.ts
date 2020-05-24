import { Component, OnInit } from '@angular/core';
import { MENUS, PRODUCTS } from './data';

@Component({
  selector: 'home-component-root',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menus = MENUS;

  products = PRODUCTS;
  title: any;

}
