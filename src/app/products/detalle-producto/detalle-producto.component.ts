
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductServices } from 'src/app/services/product.service';

@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  @Input() product: Product;

  detailActive: boolean;

  constructor(private productoService: ProductServices) {}

  ngOnInit() {
    this.detailActive = false;
  }

   productClick() {
    this.detailActive = !this.detailActive;
  }

  addToCart() {
    this.productoService.addProductToCart(this.product);
  }
}
