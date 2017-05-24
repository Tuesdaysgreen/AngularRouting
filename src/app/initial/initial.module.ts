import { InitialComponent } from './initial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [InitialComponent],
    exports: [InitialComponent]
})
export class InitialModule { }
