import { PersonService } from './../person.servise';
import { Product } from '../product.model';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-person-read',
  templateUrl: './person-read.component.html',
  styleUrls: ['./person-read.component.css']
})
export class PersonReadComponent implements OnInit {

  pessoas: Product[] = []
  displayedColumns = ['name', 'price', 'action']

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.read().subscribe(pessoas => {
      this.pessoas = pessoas
      console.log(pessoas)
    })


  }

}
