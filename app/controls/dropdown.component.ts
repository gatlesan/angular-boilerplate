import { platformBrowserDynamic }      from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component }  from '@angular/core';

interface Product {
    id: number;
    name: string;
}


@Component({
    selector : 'my-app',
    template: `
    <h3> Select your product to buy <h3>
    <select (change) = "onSelect($event.target.value)">
     <option *ngFor = "let prod of products" [value]="prod.id">
       {{prod.name}}
     </option>
    </select>
    <br/>
    <h2 class="well">you selected {{selectedProduct.name}}</h2>
    `
})



class DropDownComponent {
    public products: Product[] = [
        {"id":1,"name": "Monitor"},
        {"id":2,"name": "Keyboard"},
        {"id":3,"name": "Mouse"},
        {"id":4,"name": "Printer"}];

    public selectedProduct: Product = this.products[0];

    onSelect(prodId:any) {

        this.selectedProduct = null;
        for(let i=0;i<this.products.length;i++){

            if(this.products[i].id == prodId) {

                this.selectedProduct = this.products[i];

            }

        }

    }


}

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ DropDownComponent ],
  bootstrap:    [ DropDownComponent ]
  
})
class AppModule{}
platformBrowserDynamic().bootstrapModule(AppModule);