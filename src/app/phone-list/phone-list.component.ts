import { Component, OnInit } from '@angular/core';

import { PhoneService } from '../phone.service'

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: Array<any> = [];

  constructor(private myPhoneService: PhoneService) { }

  ngOnInit() {
    this.myPhoneService.getList()
    .then((phonesList) => {
      this.phones = phonesList
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
