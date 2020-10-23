import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class SharedService{
  value: string;
  // tslint:disable-next-line:typedef
  public getSharedValue(anyValue) {
    this.value = anyValue;
    return this.value;
  }
}
