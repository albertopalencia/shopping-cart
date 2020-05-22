import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FilterCategoryComponent } from './filters/category/filter-category.component';
import { ProductServices } from './services/product.service';
import { ProductComponent } from './products/product.component';
import { DetalleProductoComponent } from './products/detalle-producto/detalle-producto.component';
import { SearchComponent } from './products/search/search.component';
import { SortComponent } from './products/sort/sort.component';
import { CartComponent } from './cart/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterCategoryComponent,
    ProductComponent,
    DetalleProductoComponent,
    SearchComponent,
    SortComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   ProductServices  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
