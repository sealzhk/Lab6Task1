import { Component } from '@angular/core';
import {SharedService} from '../service/shared.service';
import {LoggingService} from '../service/logging.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
})
export class Child1Component {
  value: string;
  child1 = 'strawberry';

  constructor(private sharedService: SharedService, private loggingService: LoggingService){
    this.value = sharedService.getSharedValue(this.child1);
    this.loggingService.log('Child 1 value: ' + this.value);
  }
}
