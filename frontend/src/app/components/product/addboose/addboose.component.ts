import { BooseService } from '../boose.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from "./../product.model";


@Component({
  selector: 'app-addboose',
  templateUrl: './addboose.component.html',
  styleUrls: ['./addboose.component.css']
})
export class AddbooseComponent implements OnInit {

  product: Product = {

    name: '',
    price: 0
  }



  constructor(private booseService: BooseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addBosse(): void {
    this.booseService.create(this.product).subscribe(() => {
      this.booseService.showMessage('Produto Cadastrado')
      this.router.navigate(['/list'])

    })
  }

  Cancelar(): void {
    this.router.navigate(['/list'])
  }

}
