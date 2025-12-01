import { Injectable, inject } from '@angular/core';
// Importação do Banco Novo
import { Database, ref, push, listVal } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  // Injeta o banco moderno
  private db = inject(Database);

  constructor() { }

  criarContato(contato: any) {
    // Cria uma referência para a pasta 'contatos'
    const contatosRef = ref(this.db, 'contatos');
    // Faz o push (salvar)
    return push(contatosRef, contato);
  }

  listarContatos() {
    const contatosRef = ref(this.db, 'contatos');
    return listVal(contatosRef);
  }
}