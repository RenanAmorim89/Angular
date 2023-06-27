import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent {
  // input property
  // usando o decorator @Input() para tornar a propriedade nomeCurso visível para outros componentes.
  // Usar internamente o nomeCurso e externamente o nome
  @Input('nome') nomeCurso: string = ''

}
