import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ChartDataComponent} from './chart-data/chart-data.component';

import { GetDataService } from './get-data.service';

// import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';
// import { ChartDataComponent } from './chart-data/chart-data.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ChartDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
    // ChartsModule,
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
