import { Guest } from './guest';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Add the RxJS Observable operators we need in this app.
import 'controllers/rxjs-operators';

@Injectable()
export class GuestService {
    private _guestUrl = 'api/guests.json';

    constructor(private _http: Http) { }
    
    getGuests(): Observable<Guest[]> {
        return this._http.get(this._guestUrl)
            .map((response: Response) => <Guest[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
