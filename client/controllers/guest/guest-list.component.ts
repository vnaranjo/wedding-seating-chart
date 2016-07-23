import { Component } from '@angular/core';
import { GuestService } from './guest.service';
import { Guest } from './guest';
import { OnInit } from '@angular/core';

@Component({
  selector: 'guest-list',
  templateUrl: 'controllers/guest/guest-list.component.html',
  styleUrls: [ 'controllers/guest/guest-list.component.css' ]
})
export class GuestListComponent implements OnInit {
  
  items: Guest[];
  errorMessage: string;
  
  constructor(private guestService : GuestService){
  }
  
  getGuests() {
    this.guestService.getGuests().subscribe(items => this.items = items, error=> this.errorMessage = <any>error);
  }
  
  ngOnInit() {
    this.getGuests();
  }
}
