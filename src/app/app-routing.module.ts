import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParkingLotsComponent} from "./parking/pages/parking-lots/parking-lots.component";
import {ParkingGraphsComponent} from "./parking/pages/parking-graphs/parking-graphs.component";
import {ProfileComponent} from "./parking/pages/profile/profile.component";
import {ParkingPaymentComponent} from "./parking/pages/parking-payment/parking-payment.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

const routes: Routes = [
  //Add routes
  {path: 'parking-lots',component: ParkingLotsComponent},
  {path: 'parking-graphs',component: ParkingGraphsComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'parking-payment',component:ParkingPaymentComponent},
  //Add when there aren't routers
  {path: '',redirectTo: 'parking-lots',pathMatch: 'full'},
  //Add notfoundPage
  {path: '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
