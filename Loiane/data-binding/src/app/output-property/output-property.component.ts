import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  // Evento que será emitido para o componente pai
  @Output() mudouValor = new EventEmitter();

  // Metodos que serão chamados no template
  incrementa(){
    this.valor++
    this.mudouValor.emit({novoValor: this.valor})

  }

  decrementa(){
    this.valor--
    this.mudouValor.emit({novoValor: this.valor})

  }



}
