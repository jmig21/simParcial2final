import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/persons/person/person.component';
import { CompanyListComponent } from './components/companies/company/company.component';

const routes: Routes = [
  { path: 'persons', component: PersonListComponent },
  { path: 'companies', component: CompanyListComponent },
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
