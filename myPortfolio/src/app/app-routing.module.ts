import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { LoginBComponent } from './components/login-b/login-b.component';

const routes: Routes = [
  { path: 'iniciar-secion', component: LoginBComponent },
  { path: 'proyects', component: ProyectsComponent },
  { path: 'portfolio', component: HomeComponent },
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
