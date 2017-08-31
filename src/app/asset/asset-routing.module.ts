import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AssetComponent } from "./asset.component";

const routes: Routes = [
  {
    path: '',
    component: AssetComponent,
    data: { title: 'Activos' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }