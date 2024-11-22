import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component'; // Import the LoginComponent
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CodeInputModule } from 'angular-code-input';

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    // RegisterComponent,
    // ActivateAccountComponent
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CodeInputModule
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
