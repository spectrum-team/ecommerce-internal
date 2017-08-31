import { NgModule } from "@angular/core";

import { AssetComponent } from "./asset.component";
import { AssetRoutingModule } from "./asset-routing.module";

@NgModule({
  imports: [
    AssetRoutingModule
  ],
  declarations: [AssetComponent]
})
export class AssetModule { }