import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, switchMap } from 'rxjs';

@Component({
  selector: 'hello-component',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  title = 'contents';
  public counter = 0;

  ngOnInit() {
    // fromEvent(document, 'click')
    //   .pipe(switchMap(() => interval(100)))
    //   .subscribe((val) => (this.counter = val));
  }
}
