import { InitialComponent } from './initial.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [RouterModule.forChild([
    { path: 'initial', component: InitialComponent }
  ])],
  exports: [RouterModule]
})
export class InitialRoutingModule {}
