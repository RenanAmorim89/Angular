import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{

  nomePortal: string


  cursos: string[];
  
// Podemos iniciar a variavel no construtor
// injeção de dependencia constructor(cursosService: CursosService)
  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training'
// 
    //let servico = new CursosService()
    
    // recebendo o retorno do metodo getCursos
    this.cursos = this.cursosService.getCursos()
   }


  ngOnInit() 
  {
  }


}
