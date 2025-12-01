import { Component } from '@angular/core';
import { BancoService } from '../services/banco.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.page.html',
  styleUrls: ['./listar-contatos.page.scss'],
  standalone: false
})
export class ListarContatosPage {

  // A variável agora é um Observable (por convenção usamos o $ no final)
  contatos$!: Observable<any[]>;

  constructor(private bancoService: BancoService) { }

  // ionViewWillEnter roda toda vez que a tela abre (mesmo voltando)
  ionViewWillEnter() {
    this.contatos$ = this.bancoService.listarContatos();
  }
}