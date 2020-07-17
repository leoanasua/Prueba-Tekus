import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataserviceService {

  constructor(private http: HttpClient) { }

  getDevices() {
  return this.http.get('https://patatas-air.s3.amazonaws.com/devices');
  }

  getCitiesAll() {
  return this.http.get('https://patatas-air.s3.amazonaws.com/cities');
  }

  getCityNameById( id: number, cities: [] ) {
    return cities.filter((city: any) => {
      if (city.Id == id) {
        return city.Name;
      }
    });
  }
  getDevicesAlert() {
  return this.http.get('https://patatas-air.s3.amazonaws.com/devices');
  }

  }

