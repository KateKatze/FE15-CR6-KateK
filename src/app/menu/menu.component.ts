import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  products: IProducts[] = products;

  constructor(private cartService: CartService) { }

  addToCart(id: number) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.products[id]);
  }
  
  ngOnInit(): void {
  }
}
