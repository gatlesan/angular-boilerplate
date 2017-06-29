import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular App from Santo</h1>
    <h2 style="background-color:orange"> Welcomew to Angular 2  </h2>
    <h3 [myHidden]= "val" style="background-color:lightblue">
    <div>Welcome to Hidden Custom Attribute Directive </div>

    </h3>

    <hr/>
    <br/>

    <h2> Pipes Demo </h2>
    <div style="background-color:yellow">
    <h2>Enter Temperature </h2>
    <input type= 'text' [(ngModel)] = "temp">
    <button (click)="toggleFormat()">Toggle Format </button>
    <br/>
    <h3 style="background-color:lightgreen">
    In {{targetFormat}} this temperature is 
    {{temp|temperature:format|number:'1.1-2'}}
    </h3>
    </div>
    
    
    
    `
})
export class AppComponent { 

    val: boolean = true;
    temp: number = 40;
    toCelsius = true;
    targetFormat  = 'Celsius';
    format = 'FtoC';

    toggleFormat() {
        this.toCelsius = !this.toCelsius;
        this.format = this.toCelsius?'FtoC':'CtoF';
        this.targetFormat = this.toCelsius ? 'Celsius': 'Fahrenheit'; 
    }
}
