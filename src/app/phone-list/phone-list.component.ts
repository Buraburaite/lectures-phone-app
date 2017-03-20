import { Component, OnInit } from '@angular/core';

import { PhoneService } from '../phone.service'

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  constructor(private myPhoneService: PhoneService) { }

  ngOnInit() {
    this.myPhoneService.getList()
    .then((apiResult) => {
      console.log(apiResult);
    })
    .catch((err) => {
      console.log(err);
    });
  }

}
