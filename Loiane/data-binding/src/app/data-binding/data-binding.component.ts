import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = 'http://loiane.training';

  cursoAngular: boolean = true;

  urlImagem = 'http://lorempixel.com.br/500/400/?1';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    // console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value
    
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor
  }
  //* se o mouse estiver sobre o botão, o valor de isMouseOver será true, se não, será false
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver

  }

  

  getCurtirCurso() {
    return true;
  }
}
