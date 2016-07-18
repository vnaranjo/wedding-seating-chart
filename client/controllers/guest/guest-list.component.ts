import { Component } from '@angular/core';
import { GuestService } from 'controllers/guest/guest.service';
import { Guest } from 'controllers/guest/guest';

@Component({
  selector: 'guest-list',
  templateUrl: 'controllers/guest/guest-list.component.html',
  styleUrls: [ 'controllers/guest/guest-list.component.css' ]
})
export class GuestListComponent {
  
  items: Guest[] = [
     {name: 'Feed the cat', quantity: 2},
     {name: 'Do the shopping', quantity: 3}
  ];
}
