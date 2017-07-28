import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class GetDataService {
  private url = 'http://localhost:8080';
  private socket;

  constructor() {}

  getData() {
    let observable = new Observable (observer => {
      this.socket = io(this.url);
      this.socket.on('data', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}

