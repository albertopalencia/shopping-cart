import { Injectable } from '@angular/core';
import { ARRAY_DATA } from '../seed-data.model';
import { Subject } from 'rxjs';

@Injectable()
export class ProductServices {

    products: any[] = [];
    cartTotal = 0;

    private productAddedSource = new Subject<any>();

    productAdded$ = this.productAddedSource.asObservable();

    constructor() { }

    getData(): Promise<any> {
        return Promise.resolve(ARRAY_DATA);
    }

    addProductToCart(product) {
        let exists = false;
        const parsedPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
        this.cartTotal += parsedPrice;

        this.products = this.products.map(_product => {
            if (_product.product.id === product.id) {
                _product.quantity++;
                exists = true;
            }
            return _product;
        });

        if (!exists) {
            product.parsedPrice = parsedPrice;
            this.products.push({
                product: product,
                quantity: 1
            });
        }

        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    }

    deleteProductFromCart(product) {
        this.products = this.products.filter(_product => {
            if (_product.product.id === product.id) {
                this.cartTotal -= _product.product.parsedPrice * _product.quantity;
                return false;
            }
            return true;
        });
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    }


    flushCart() {
        this.products = [];
        this.cartTotal = 0;
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    }
}