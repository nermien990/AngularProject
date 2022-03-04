import { IPost } from './../Shared Classes and types/IPost';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  _url: string = 'https://jsonplaceholder.typicode.com/posts/';

  getAllPosts(): Observable<IPost> {
    return this.http.get<IPost>(this._url).pipe(
      catchError((e) => {
        return throwError(e.message || 'Server error');
      })
    );
  }
}
