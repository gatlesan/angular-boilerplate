"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var DropDownComponent = (function () {
    function DropDownComponent() {
        this.products = [
            { "id": 1, "name": "Monitor" },
            { "id": 2, "name": "Keyboard" },
            { "id": 3, "name": "Mouse" },
            { "id": 4, "name": "Printer" }
        ];
        this.selectedProduct = this.products[0];
    }
    DropDownComponent.prototype.onSelect = function (prodId) {
        this.selectedProduct = null;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == prodId) {
                this.selectedProduct = this.products[i];
            }
        }
    };
    return DropDownComponent;
}());
DropDownComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h3> Select your product to buy <h3>\n    <select (change) = \"onSelect($event.target.value)\">\n     <option *ngFor = \"let prod of products\" [value]=\"prod.id\">\n       {{prod.name}}\n     </option>\n    </select>\n    <br/>\n    <h2 class=\"well\">you selected {{selectedProduct.name}}</h2>\n    "
    })
], DropDownComponent);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [DropDownComponent],
        bootstrap: [DropDownComponent]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=dropdown.component.js.map