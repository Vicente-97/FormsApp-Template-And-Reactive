import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './template/template.module';
import { ReactiveModule } from './reactive/reactive.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TemplateRoutingModule } from './template/template/template-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
