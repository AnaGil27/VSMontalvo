import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material/material.module';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiciossComponent } from './servicioss/servicioss.component';
import { PeinadoComponent } from './servicioss/peinado/peinado.component';
import { PeinadoListaComponent } from './servicioss/peinado/peinado-lista/peinado-lista.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ServiciossComponent,
    PeinadoComponent,
    PeinadoListaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent}, //Siempre la pagina principal
      {path: 'servicioss', component: ServiciossComponent,
        children: [
          {path: 'peinado', component: PeinadoListaComponent},
        ]
      },
      {path: '', redirectTo: 'login', pathMatch: 'full'}, 
      {path: '**', component: PageNotFoundComponent} //pagina equis 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
