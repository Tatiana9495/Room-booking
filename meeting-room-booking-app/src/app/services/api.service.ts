import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from '../interfaces';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  addEvent(event: Event) {
    const body = { name: event.name, startAt: event.startAt, endAt: event.endAt, roomId: event.roomId };
    this.http.post('http://localhost:3000/events', body).subscribe(data => body);
  }

  getEventData(): Observable<any> {
    return this.http.get('http://localhost:3000/events');
  }
}
