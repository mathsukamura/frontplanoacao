import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-CadastroUsuario',
  templateUrl: './CadastroUsuario.component.html',
  styleUrls: ['./CadastroUsuario.component.scss']
})
export class CadastroUsuarioComponent  {

  Nome : string = '';
  Email: string = '';
  Senha: string = '';

  constructor(private http: HttpClient) { }

  Cadastro() {
    const credentials = {
      "Nome" : this.Nome,
      "Email": this.Email,
      "Senha": this.Senha
    };

    this.http.post<any>('https://localhost:44377/cadastro', credentials).subscribe(
      response => {

        console.log('usuario cadastrado com sucesso', response);
      },
      error => {
        console.error('Não foi possive cadastrar:', error);
      }
    );
  }
}
