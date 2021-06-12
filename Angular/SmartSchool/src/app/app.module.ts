import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ProfessoresComponent } from './professores/professores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TelaprincipalComponent } from './telaprincipal/telaprincipal.component';

@NgModule({
  declarations: [	
    AppComponent,
    AlunoComponent,
      ProfessoresComponent,
      PerfilComponent,
      TelaprincipalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
