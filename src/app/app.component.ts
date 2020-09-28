import { Component } from '@angular/core';
import { UsedCarsServices } from './usedcars/services/UsedcarsServices';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsedCarsServices]
})
export class AppComponent {

}
