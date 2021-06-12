import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  titulo='Alunos';

  public alunos = [
   { nome:'Thyago'},
   { nome:'Marcelo'},
   { nome:'Pedro'},
   { nome:'Julho'},
   { nome:'Jose'},
   { nome:'Camila'},
   { nome:'Alonsso'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
