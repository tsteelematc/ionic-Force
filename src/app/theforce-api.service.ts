import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty, merge } from 'rxjs';
import { expand } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TheforceAPIService {

  constructor(private httpsvc: HttpClient) { }

  public getPlanets() {
    console.log('Getting planets');

    // return this.httpsvc.get('https://swapi.co/api/planets');

    // const p1 = this.httpsvc.get('https://swapi.co/api/planets');
    // const p2 = this.httpsvc.get('https://swapi.co/api/planets?page=2');
    // const p3 = this.httpsvc.get('https://swapi.co/api/planets?page=3');
    // const p4 = this.httpsvc.get('https://swapi.co/api/planets?page=4');
    // const p5 = this.httpsvc.get('https://swapi.co/api/planets?page=5');
    // const p6 = this.httpsvc.get('https://swapi.co/api/planets?page=6');
    // const p7 = this.httpsvc.get('https://swapi.co/api/planets?page=7');

    // return merge (p1, p2, p3, p4, p5, p6, p7 );

    return this.getPage('https://swapi.co/api/planets')
      .pipe(expand(
        (data, i) => (<any>data).next ?  this.getPage((<any>data).next) : empty()
      ))
    ;

  }

  private getPage(pageURL: string){
    return this.httpsvc.get(pageURL)  }
}
