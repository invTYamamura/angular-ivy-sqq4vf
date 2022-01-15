import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  private user$: BehaviorSubject<User>;
  private user: Observable<User>;

  u: User;

  constructor(private http: HttpClient) {}

  fetchUser(): Observable<User> {
    console.log(`userhttp.service.ts ->: start`);
    return this.http
      .get<User>(
        'https://www.jma.go.jp/bosai/forecast/data/overview_week/130000.json'
      )
      .pipe(
        switchMap((user: User) => {
          if (this.user$) {
            this.user$.next(user);
            return this.user;
          } else {
            this.user$ = new BehaviorSubject(user);
            this.user = this.user$.asObservable();
            return this.user;
          }
        })
      );
  }

  getUser(): Observable<User> {
    return this.user || this.fetchUser();
  }
}
