import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GuestService } from 'controllers/guest/guest.service';


@Component({
    selector: 'wedding-app',
    templateUrl: 'controllers/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ GuestService ]
})
export class AppComponent {
}