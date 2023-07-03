import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent {

  Email: string = '';
  Senha: string = '';

  constructor(private http: HttpClient) { }

  login() {
    const credentials = {
      "Email": this.Email,
      "Senha": this.Senha
    };

    this.http.post<any>('https://localhost:44377/login', credentials).subscribe(
      response => {

        console.log('Login bem-sucedido!', response);
      },
      error => {
        console.error('Erro no login:', error);
      }
    );
  }
}
