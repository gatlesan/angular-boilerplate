"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.val = true;
        this.temp = 40;
        this.toCelsius = true;
        this.targetFormat = 'Celsius';
        this.format = 'FtoC';
    }
    AppComponent.prototype.toggleFormat = function () {
        this.toCelsius = !this.toCelsius;
        this.format = this.toCelsius ? 'FtoC' : 'CtoF';
        this.targetFormat = this.toCelsius ? 'Celsius' : 'Fahrenheit';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>My First Angular App from Santo</h1>\n    <h2 style=\"background-color:orange\"> Welcomew to Angular 2  </h2>\n    <h3 [myHidden]= \"val\" style=\"background-color:lightblue\">\n    <div>Welcome to Hidden Custom Attribute Directive </div>\n\n    </h3>\n\n    <hr/>\n    <br/>\n\n    <h2> Pipes Demo </h2>\n    <div style=\"background-color:yellow\">\n    <h2>Enter Temperature </h2>\n    <input type= 'text' [(ngModel)] = \"temp\">\n    <button (click)=\"toggleFormat()\">Toggle Format </button>\n    <br/>\n    <h3 style=\"background-color:lightgreen\">\n    In {{targetFormat}} this temperature is \n    {{temp|temperature:format|number:'1.1-2'}}\n    </h3>\n    </div>\n    \n    \n    \n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map