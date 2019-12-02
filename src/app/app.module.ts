import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AltaComponent } from './components/alta/alta.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { DemoService } from './services/demo.service';
import { LapizService } from './services/lapiz.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AltaComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:  [DemoService, LapizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
