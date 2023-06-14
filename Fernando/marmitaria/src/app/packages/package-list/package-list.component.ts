import { Component, OnInit } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[] = [
    new Package('Churrasco', 'Churrasco de Picanha','https://minervafoods.com/wp-content/uploads/2023/02/Acompanhamento-para-churrasco-confira-8-opcoes-saborosas-scaled.jpg'),

    new Package('Churrasco', 'Churrasco de Picanha','https://minervafoods.com/wp-content/uploads/2023/02/Acompanhamento-para-churrasco-confira-8-opcoes-saborosas-scaled.jpg'),
  ];

  constructor(){}

  ngOnInit(): void {

  }

}
