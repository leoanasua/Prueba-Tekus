import { Component } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})

export class CardsComponent {
  devicesInfo: any [] = [];
  citiesInfo: any;
  cities: any;

  constructor( private dataService: DataserviceService, private http: HttpClient ) {

    this.http.get('https://patatas-air.s3.amazonaws.com/cities')
        .subscribe( (data: any) => {
          this.cities = data;

        });

    this.dataService.getDevices()
        .subscribe( (data: any) => {
          console.log(data);
          this.devicesInfo = data;
          this.devices();
        });

    this.dataService.getCities()
        .subscribe( (alert: any) => {
        console.log(alert);
        this.citiesInfo = alert;

    });

  }

  devices(): any {
    this.devicesInfo.map((device: any) => {
        device.CityId = this.dataService.getCityNameById(device.CityId, this.cities);
    });
    console.log(this.devicesInfo);
  }
}