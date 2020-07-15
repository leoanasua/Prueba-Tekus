import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class DataserviceService {


  constructor(private http: HttpClient) {
    console.log('Servicio listo!');
  }

  getDevices() { // Para traer la info de los dispositivos

  return this.http.get('https://patatas-air.s3.amazonaws.com/devices');
  }

  getCitiesAll() {
    this.http.get('https://patatas-air.s3.amazonaws.com/cities');
  }

  getCities() { // info de las ciudades // pruebas
    let a = 0;
    let w = 0;
    let n = 0;
    return this.http.get('https://patatas-air.s3.amazonaws.com/cities')
      .pipe(
        map( (data: any []) => {
          return data.map ( city => {
            return ( a = a + city.AlertDevicesCount,
                    w = w + city.WarningDevicesCount,
                     n = n + city.NormalDevicesCount);
          });
        })
     );
  }

  getCityNameById(id: number, cities: []) {
    return cities.filter((city: any) => {
      if (city.Id == id) {
        return city.Name;
      }
    });
  }

}
