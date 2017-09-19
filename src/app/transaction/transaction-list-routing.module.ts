import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TransactionListComponent } from "./transaction-list.component";

const routes: Routes = [
  {
    path: '',
    component: TransactionListComponent,
    data: { title: 'Transacciones' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionListRoutingModule { }