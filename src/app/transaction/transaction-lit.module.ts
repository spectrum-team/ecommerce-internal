import { NgModule } from "@angular/core";

import { TransactionListComponent } from "./transaction-list.component";
import { TransactionListRoutingModule } from "./transaction-list-routing.module";

@NgModule({
  imports: [
    TransactionListRoutingModule
  ],
  declarations: [TransactionListComponent]
})
export class TransactionListModule { }