import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'aboutus',
  component: AboutusComponent
}, {
  path: 'menu',
  component: MenuComponent
}, {
  path: 'cart',
  component: CartComponent
}, {
  path: 'details',
  component: DetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
