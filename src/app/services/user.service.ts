import { IUser } from './../Shared Classes and types/IUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  _url: string = '../../assets/Data/users.json';

  getAllUsers(): Observable<IUser> {
    return this.http.get<IUser>(this._url).pipe(
      catchError((e) => {
        return throwError(e.message || 'Server Error');
      })
    );
  }
}
