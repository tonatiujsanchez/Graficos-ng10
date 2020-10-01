import { RouterModule,  Routes } from '@angular/router';
import { LineasComponent } from './pages/lineas/lineas.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonasComponent } from './pages/donas/donas.component';
import { RadarComponent } from './pages/radar/radar.component';





const APP_ROUTES: Routes = [
    { path: 'lineas', component: LineasComponent },
    { path: 'barras', component: BarrasComponent },
    { path: 'donas', component: DonasComponent },
    { path: 'radar', component: RadarComponent },
    { path: '**', pathMatch: 'full', redirectTo:'lineas' }
];


export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );