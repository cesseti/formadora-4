import { Component } from '@angular/core';
import { BancoService } from '../services/banco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.page.html',
  styleUrls: ['./adicionar-contato.page.scss'],
  standalone: false
})
export class AdicionarContatoPage {
  nome: string = '';
  email: string = '';

  constructor(private bancoService: BancoService, private router: Router) {}

  salvar() {
    const contato = { name: this.nome, email: this.email };
    
    // Chama o serviço para salvar
    this.bancoService.criarContato(contato)
      .then(() => {
        console.log('Salvo com sucesso!');
        this.router.navigate(['/listar-contatos']);
      })
      .catch((err: any) => console.error('Erro ao salvar:', err));
  }
}