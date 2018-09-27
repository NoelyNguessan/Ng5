import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


@Injectable()

export class DataService {

  private ambitions = new BehaviorSubject<any>(['la principal ambition', 'ambitions secondaire']);
  ambition = this.ambitions.asObservable();


  constructor() { }

   changeDambition(ambition) {
    this.ambitions.next(ambition);
  }

}
