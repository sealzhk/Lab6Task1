import { Component } from '@angular/core';
import {SharedService} from '../service/shared.service';
import {LoggingService} from '../service/logging.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  providers :[]
})
export class Child2Component {
  value: string;
  child2 = 'blueberry';

  constructor(private sharedService: SharedService, private loggingService: LoggingService){
    this.value = sharedService.getSharedValue(this.child2);
    this.loggingService.log('Child 2 value: '  + this.value);
  }
}
