import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  titulo='Alunos';

  public alunos = [
    'Thyago',
    'Marcelo',
    'Pedro',
    'Julho',
    'Jose',
    'Camila',
    'Alonsso',
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
