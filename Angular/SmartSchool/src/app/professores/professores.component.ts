import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo='Professores'



  public professores = [
      {nome:'Trevor'},
      {nome:'Max'},
      {nome:'Fibi'},
      {nome:'Thunderman'},
      {nome:'Nikolas'},
      {nome:'Sora'},
      {nome:'Bili'},
      {nome:'Nora'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
