import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfessoresComponent } from './professores/professores.component';
import { TelaprincipalComponent } from './telaprincipal/telaprincipal.component';

const routes: Routes = [
  {path: '', redirectTo: 'telaprincipal', pathMatch: 'full' },
  {path: 'telaprincipal', component: TelaprincipalComponent},
  {path: 'aluno', component: AlunoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'professores', component: ProfessoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
