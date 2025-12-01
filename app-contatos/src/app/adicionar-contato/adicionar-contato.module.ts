import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdicionarContatoPageRoutingModule } from './adicionar-contato-routing.module';
import { AdicionarContatoPage } from './adicionar-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarContatoPageRoutingModule
  ],
  declarations: [AdicionarContatoPage] // <--- AQUI ELA É DECLARADA
})
export class AdicionarContatoPageModule {}