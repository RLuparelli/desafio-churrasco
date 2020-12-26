import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToAddBoose(): void {
    this.router.navigate(['/addboose'])

  }
  navigateToAddFood(): void {
    this.router.navigate(['/addfood'])

  }

}