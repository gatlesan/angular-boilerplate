import {Directive,ElementRef,Input,Renderer} from '@angular/core';

//attribute dirctive
@Directive({selector: '[myHidden]'})

export class HiddenDirective {
    constructor(public el:ElementRef,public renderer: Renderer) {}

    @Input() myHidden: boolean;

    ngOnInit(){
        console.log(this.myHidden);

        if(this.myHidden) {
            console.log('hide');
            this.renderer.setElementStyle(this.el.nativeElement,'display','none');
        }
    }


}