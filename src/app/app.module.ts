import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
