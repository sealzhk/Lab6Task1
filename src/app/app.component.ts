import { Component } from '@angular/core';
import {LoggingService} from './service/logging.service';
import {SharedService} from './service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers : []
})
export class AppComponent {
  title = 'Lab6Task1';
}
