import { ChildComponent } from './child.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [ChildComponent],
    exports: [ChildComponent]
})
export class ChildModule { }
