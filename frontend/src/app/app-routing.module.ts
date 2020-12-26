import { ProductAddpersonComponent } from './views/product-addperson/product-addperson.component';
import { ProductPersonComponent } from './views/product-person/product-person.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbooseComponent } from './components/product/addboose/addboose.component';
import { AddfoodComponent } from './components/product/addfood/addfood.component';
import { HomeComponent } from './views/home/home.component';
import { ProductBooseComponent } from './views/product-boose/product-boose.component';
import { ProductFoodComponent } from './views/product-food/product-food.component';
import { ProductListComponent } from './views/product-list/product-list.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "boose",
    component: ProductBooseComponent
  }, {
    path: "food",
    component: ProductFoodComponent
  }, {
    path: "list",
    component: ProductListComponent
  }, {
    path: "addboose",
    component: AddbooseComponent
  }, {
    path: "addfood",
    component: AddfoodComponent
  }, {
    path: "pessoas",
    component: ProductPersonComponent
  }, {
    path: "addperson",
    component: ProductAddpersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
