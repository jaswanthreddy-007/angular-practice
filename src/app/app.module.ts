import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NoPageComponent } from './no-page/no-page.component';
import { StoreModule } from '@ngrx/store';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    HomeComponent,
    ContactComponent,
    NoPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
