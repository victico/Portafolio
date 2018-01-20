import { RouterModule, Routes } from '@angular/router';
import {
	AboutComponent,
PortafolioComponent,
ItemComponent,
BuscadorComponent


} from "./components/index.paginas";


const app_routes: Routes = [

{ path: 'home', component: PortafolioComponent },
{ path: 'about', component: AboutComponent },
{ path: 'item/:id', component: ItemComponent },
{ path: 'buscador/:parametro', component: BuscadorComponent },

{ path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});