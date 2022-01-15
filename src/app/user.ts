import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class User {
  publishingOffice: string;
  reportDatetime: string;
  headTitle: string;
  text: string;
}
