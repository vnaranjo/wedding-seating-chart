import { Guest } from 'controllers/guest/guest';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GuestService {
  getGuests(): Observable<Guest[]> {
    Observable.from([
     {name: 'Feed the cat', quantity=2},
     {name: 'Do the shopping', quantity=3}
    ]);
  }
}