import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  //#region properties

    @Input() products: Product[];

  //#endregion

  constructor() { }

  ngOnInit() {
  }

}
