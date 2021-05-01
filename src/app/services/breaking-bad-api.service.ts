import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BreakingBadResponse } from '../breakingbadresponse';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadApiService {

  private _siteURL = "https://www.breakingbadapi.com/api/characters/";
  private _key = '?limit=1&name=';
  private _allKey = '?name=';
  constructor(private _http: HttpClient) { }

  getCharacterData(characterName): Observable<BreakingBadResponse> {
    return this._http.get<BreakingBadResponse>(this._siteURL + this._key + characterName)
      .pipe(
        tap(data => console.log(JSON.stringify(data))
        ),
        catchError(this.handleError)
      );

  }

  getAllData(): Observable<BreakingBadResponse> {
    return this._http.get<BreakingBadResponse>(this._siteURL + this._allKey)
      .pipe(
        tap(data => console.log(JSON.stringify(data))
        ),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    console.log('BreakingBadApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}
