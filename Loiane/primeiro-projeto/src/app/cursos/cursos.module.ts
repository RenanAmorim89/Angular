import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule 
  ],
  // Sera exportado para o modulo que importar este modulo
  exports: [
    CursosComponent
  ],
  // providers: fornecedores de serviços
  providers: [ CursosService ]
})
export class CursosModule { }
