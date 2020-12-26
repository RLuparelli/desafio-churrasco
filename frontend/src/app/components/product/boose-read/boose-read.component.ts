import { BooseService } from "./../boose.service";
import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-boose-read",

  templateUrl: "./boose-read.component.html",
  styleUrls: ["./boose-read.component.css"],
})
export class BooseReadComponent implements OnInit {
  bebidas: Product[] = [];
  displayedColumns = ["name", "price", "action"];

  constructor(private booseService: BooseService) { }

  ngOnInit(): void {
    this.booseService.read().subscribe((bebidas) => {
      this.bebidas = bebidas;
      console.log(bebidas);
    });
  }
}
