import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LineasComponent } from './pages/lineas/lineas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonasComponent } from './pages/donas/donas.component';
import { RadarComponent } from './pages/radar/radar.component';


@NgModule({
  declarations: [
    AppComponent,
    LineasComponent,
    NavbarComponent,
    BarrasComponent,
    DonasComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
