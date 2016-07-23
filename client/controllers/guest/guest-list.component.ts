import { Component } from '@angular/core';
import { GuestService } from 'controllers/guest/guest.service';
import { Guest } from 'controllers/guest/guest';
import { OnInit } from '@angular/core';

@Component({
  selector: 'guest-list',
  templateUrl: 'controllers/guest/guest-list.component.html',
  styleUrls: [ 'controllers/guest/guest-list.component.css' ]
})
export class GuestListComponent implements OnInit {
  
  items: Guest[];
  
  constructor(private guestService : GuestService){
  }
  
  getGuests() {
    this.guestService.getGuests().subscribe(items => this.items = items, error=> this.errorMessage = <any>error);
  }
  
  ngOnInit() {
    this.getGuests();
  }
}
