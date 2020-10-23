import { Component } from '@angular/core';
import {SharedService} from '../service/shared.service';
import {LoggingService} from '../service/logging.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  providers: [SharedService, LoggingService]
})
export class Parent2Component {
  value: string;
  parent2 = 'banana';
  constructor(private sharedService: SharedService, private loggingService: LoggingService) {
    this.value = sharedService.getSharedValue(this.parent2);
    this.loggingService.log('Parent 2 value: ' + this.value);
  }
}
