import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  cities: any[] = [];

  constructor( private http: HttpClient ) {

    this.http.get('https://patatas-air.s3.amazonaws.com/cities')
        .subscribe( (data: any) => {
          this.cities = data;
          console.log(this.cities);
        });

  }

}
