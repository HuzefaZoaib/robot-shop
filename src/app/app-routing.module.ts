import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

const routes: Routes = [
  { path: 'robot-shop/home', component: HomeComponent, title: "Home - Joe's Robot Shop" },
  { path: 'robot-shop/catalog', component: CatalogComponent, title: "Catalog - Joe's Robot Shop" },
  { path: 'robot-shop/cart', component: CartComponent, title: "Cart - Joe's Robot Shop" },
  { path: 'robot-shop/sign-in', component: SignInComponent },
  { path: 'robot-shop/form-controls', component: TemplateFormControlsComponent },
  { path: '', redirectTo: 'robot-shop//home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
