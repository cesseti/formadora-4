import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listar-contatos',
    loadChildren: () => import('./listar-contatos/listar-contatos.module').then( m => m.ListarContatosPageModule)
  },
  {
    path: 'adicionar-contato',
    loadChildren: () => import('./adicionar-contato/adicionar-contato.module').then( m => m.AdicionarContatoPageModule)
  },
  {
    path: 'listar-contatos',
    loadChildren: () => import('./listar-contatos/listar-contatos.module').then( m => m.ListarContatosPageModule)
  },
  {
    path: 'adicionar-contato',
    loadChildren: () => import('./adicionar-contato/adicionar-contato.module').then( m => m.AdicionarContatoPageModule)
  },
  {
    path: 'adicionar-contato',
    loadChildren: () => import('./adicionar-contato/adicionar-contato.module').then( m => m.AdicionarContatoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
