import {NgModule} from '@angular/core';
import {HiddenDirective} from './hidden.directive';
import {TemperaturePipe} from './temperature.pipe'



@NgModule({
    declarations : [HiddenDirective,TemperaturePipe],
    exports: [HiddenDirective,TemperaturePipe]

})

export class SharedModule {}