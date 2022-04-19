import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { DatePassedPipe } from './date-passed.pipe';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { DisplayRepositoriesComponent } from './display-repositories/display-repositories.component';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DatePassedPipe,
    RepositoriesComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
    DisplayRepositoriesComponent,
    DisplayProfileComponent,
    FormsModule
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
