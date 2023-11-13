import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './components/persons/person/person.component';
import { CompanyListComponent } from './components/companies/company/company.component';
import { PersonDetailComponent } from './components/persons/person-detail/person-detail.component';
import { CompanyDetailComponent } from './components/companies/company-detail/company-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    CompanyListComponent,
    PersonDetailComponent,
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
