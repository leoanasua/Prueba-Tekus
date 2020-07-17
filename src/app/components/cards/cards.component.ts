import { Component } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})

export class CardsComponent {
  devicesInfo: any = [];
  citiesInfo: any = [];
  cities: any = [];
  devicesInfo2: any  = [];
  totalAlert: any = 0;
  totalWarning: any = 0;
  totalNormal: any = 0;

  constructor( private dataService: DataserviceService, private http: HttpClient) {

    this.http.get('https://patatas-air.s3.amazonaws.com/cities')
        .subscribe( (data: any ) => {
          this.cities = data;
        });

    this.dataService.getDevices()
        .subscribe( (data: any ) => {
          this.devicesInfo = data;
          this.devices();
        });

    this.dataService.getDevicesAlert()
      .subscribe( (data: any) => {
        this.devicesInfo2 = data;
      });

    this.dataService.getCitiesAll()
      .subscribe( (data: any) => {
      console.log(data);
      const alert = (data.map((dato) => {
      return (dato.AlertDevicesCount);
      }));
      const warning = (data.map((dato) => {
      return dato.WarningDevicesCount;
      }));
      const normal = (data.map((dato) => {
      return dato.NormalDevicesCount;
      }));
      this.totalAlert = (alert.reduce((a, b) => a + b, 0));
      this.totalWarning = (warning.reduce((a, b) => a + b, 0));
      this.totalNormal = (normal.reduce((a, b) => a + b, 0));
    });
}

devices(): any {
  this.devicesInfo.map((device: any) => {
      device.CityId = this.dataService.getCityNameById(device.CityId, this.cities);
    });
}
 }