import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { GenericResponseModel } from '../models/generic-response.model';

import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class DecryptService {
  private url = `${environment.apiURL}`;
  private body: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient, private errorService: ErrorService ) { }

  DECRYPT( data: any ): Observable<any> {
    this.body = JSON.stringify( data );

    return this.http.post<GenericResponseModel>(`${this.url}/decrypt`, this.body, this.httpOptions)
      .pipe(
        retry( 1 ),
        catchError( this.errorService.handleError )
      );
  }

}
