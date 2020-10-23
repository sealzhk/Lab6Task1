import {Component} from '@angular/core';
import {SharedService} from '../service/shared.service';
import {LoggingService} from '../service/logging.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  providers : [SharedService, LoggingService]
})

export class Parent1Component {
  value: string;
  parent1 = 'apple';

  constructor(private sharedService: SharedService, private loggingService: LoggingService) {
    this.value = this.sharedService.getSharedValue(this.parent1);
    this.loggingService.log('Parent 1 value: ' + this.value);
  }
}
