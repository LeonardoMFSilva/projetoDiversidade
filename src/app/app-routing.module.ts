import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaComocombaterComponent } from './pagina-comocombater/pagina-comocombater.component';
import { PaginaReferenciaComponent } from './pagina-referencia/pagina-referencia.component';

const routes: Routes = [

   {path: "", redirectTo: "home", pathMatch: "full"},

  {path: "home", component: HomeComponent},
  {path: "referencias", component: PaginaReferenciaComponent},
  {path: "combater", component: PaginaComocombaterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
