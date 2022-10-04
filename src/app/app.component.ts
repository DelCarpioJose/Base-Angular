import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UrbanSolution-FreePlace';
  //Add options routers
  options=[
    {path: '/parking-lots', title: 'Search Parking'},
    {path: '/parking-graphs', title: 'Parking Graphs'},
    {path: '/profile', title: 'Profile'}
  ]

}
