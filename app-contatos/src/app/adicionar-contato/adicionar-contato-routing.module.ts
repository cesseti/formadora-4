import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarContatoPage } from './adicionar-contato.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarContatoPageRoutingModule {}
