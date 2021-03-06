import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.css']
})
export class ChartDataComponent implements OnInit {

   options: Object;
    date = [];
  chart = new Chart({
       chart: {
        zoomType: 'x',
        type: 'line',
        panning: true,
        panKey: 'shift'
      },
      title: {
        text: 'Incoming Data'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: this.date
      },
      series: [{
        name: 'Incoming Data',
        data: []
      }]
  });
  connection;
  data;

  constructor(private getDataService: GetDataService) {}

 
  ngOnInit() {
    this.connection = this.getDataService.getData().subscribe( d => {
    this.data = d;
    this.chart.addPoint(parseFloat(this.data.hkld));
    const timestamp = new Date(this.data.timestamp);
    this.date.push(
          timestamp.getHours() + ':' + timestamp.getMinutes() + ':' +
          timestamp.getSeconds() + '|' + timestamp.getDate() + '/' + (timestamp.getMonth() + 1) + '/' +
          timestamp.getFullYear());
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
