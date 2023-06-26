import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent {

  nome: string = '';

  pessoa: any = {
    nome: 'Renan',
    idade: 20,
    end: {
      rua: 'Rua 1'
    }
  }

}
