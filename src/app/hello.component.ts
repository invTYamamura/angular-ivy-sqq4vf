import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, switchMap } from 'rxjs';

import { UserHttpService } from './userhttp.service';
import { User } from './user';

@Component({
  selector: 'hello-component',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  users = new Array<User>();

  constructor(private service: UserHttpService) {}
  ngOnInit() {
    console.log(`hello.component.ts.ngOnInit ->: fetchUserStart`);
    this.service.fetchUser();
    console.log(`hello.component.ts.ngOnInit ->: fetchUserEnd`);
  }
  viewUserClick() {
    this.users = new Array<User>();
    console.log(`hello.component.ts.viewUserClick ->: getUserStart`);
    this.service.getUser().subscribe((v) => {
      console.log(v);
      this.users.push(v);
    });
    console.log(`hello.component.ts.viewUserClick ->: getUserEnd`);
  }
}
