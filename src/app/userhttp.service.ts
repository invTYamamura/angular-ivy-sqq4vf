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

  constructor(private http: HttpClient) {}

  fetchUser(): Observable<User> {
    console.log(`userhttp.service.ts ->: start`);
    return this.http.get<User>('user.json').pipe(
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

  updateUser(user: Partial<User>) {
    return this.http.put('/api/corporate', user).forEach(() => {
      if (this.user$) {
        const current = this.user$.getValue();
        this.user$.next({ ...current, ...user });
      }
    });
  }
}
