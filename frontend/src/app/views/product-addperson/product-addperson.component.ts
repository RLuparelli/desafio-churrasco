import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-addperson',
  templateUrl: './product-addperson.component.html',
  styleUrls: ['./product-addperson.component.css']
})
export class ProductAddpersonComponent implements OnInit {

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