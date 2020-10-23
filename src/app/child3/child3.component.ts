import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {SharedService} from '../service/shared.service';
import {LoggingService} from '../service/logging.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  providers :[]
})

export class Child3Component {
  value: string;
  child3 = 'pineapple';

  constructor(private sharedService: SharedService, private loggingService: LoggingService){
    this.value = sharedService.getSharedValue(this.child3);
    this.loggingService.log('Child 3 value: ' + this.value);
  }
}
