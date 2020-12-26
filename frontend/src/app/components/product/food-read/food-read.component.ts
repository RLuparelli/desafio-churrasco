import { Product } from './../product.model';
import { FoodService } from './../food.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-food-read',
  templateUrl: './food-read.component.html',
  styleUrls: ['./food-read.component.css']
})
export class FoodReadComponent implements OnInit {

  alimentos: Product[] = []
  displayedColumns = ['name', 'price', 'action']

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.read().subscribe(alimentos => {
      this.alimentos = alimentos
      console.log(alimentos)
    })


  }

}
