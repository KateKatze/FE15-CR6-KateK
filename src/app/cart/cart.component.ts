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