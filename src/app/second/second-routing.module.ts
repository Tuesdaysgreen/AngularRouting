import { SecondComponent } from './second.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'second', pathMatch: 'full'},
    { path: 'second', component: SecondComponent }
  ])],
  exports: [RouterModule]
})
export class SecondRoutingModule {}
