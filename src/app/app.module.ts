import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MaterialFormsComponent } from './material-forms/material-forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DomElementsComponent } from './dom-elements/dom-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    ReactiveFormComponent,
    MaterialFormsComponent,
    DomElementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
