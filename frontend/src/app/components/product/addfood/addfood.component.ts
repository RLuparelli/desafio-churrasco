import { Product } from "./../product.model";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  product: Product = {

    name: '',
    price: 0
  }



  constructor(private foodService: FoodService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addFood(): void {
    this.foodService.create(this.product).subscribe(() => {
      this.foodService.showMessage('Produto Cadastrado')
      this.router.navigate(['/list'])

    })
  }

  Cancelar(): void {
    this.router.navigate(['/list'])
  }

}
