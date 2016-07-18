import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'wedding-app',
    templateUrl: 'controllers/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}