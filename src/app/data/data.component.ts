import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from '../get-data.service';

import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, OnDestroy {
  data = [];
  connection;
  number:number = 0;

  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    this.connection = this.getDataService.getData().subscribe( d => {
      this.data.unshift(d);
      this.number++;
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
