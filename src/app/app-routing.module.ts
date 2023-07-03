import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Login/Login.component';
import { CadastroUsuarioComponent } from './CadastroUsuario/CadastroUsuario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
