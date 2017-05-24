import { SecondRoutingModule } from './second-routing.module';
import { SecondComponent } from './second.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, SecondRoutingModule],
    declarations: [SecondComponent],
    // exports: [SecondComponent]
})
export class SecondModule { }
