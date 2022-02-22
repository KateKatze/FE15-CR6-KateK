import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  contact = new FormGroup({
    fName: new FormControl("",[Validators.required, Validators.minLength(2)]),
    phone: new FormControl("", [Validators.required, Validators.minLength(2)]),
    textArea: new FormControl("", [Validators.required, Validators.minLength(2)])
  })

  items: IProducts[] = [];
  constructor(private cartService: CartService) { }

  get itemPrice(): number{
    let total: number = 0;
    for(const item of this.items){
      total += item.price;
    }
    return total;
  }

  get serviceFee():number{
    return this.itemPrice * 0.1;
  }

  get discount(): number{
    let total: number = this.itemPrice + this.serviceFee;
    let discount: number = 0;
    if (total >= 40){
      discount = total * 0.15;
    }
    return discount;
  }

  get totalPrice (): number{
    return (this.itemPrice + this.serviceFee);
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  submitForm() {
    if (this.contact.valid) {
       var a = this.contact.value;
    console.log(a);
    }
  }

}