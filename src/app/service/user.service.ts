import { Injectable } from '@angular/core';
import { User } from '../users/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'https://jsonplaceholder.typicode.com';

  constructor( private http: HttpClient) { }

  public fetchUsers(): User[] {
    let users = [];
    this.http.get<any>(this.API_URL + '/users').subscribe({
      next: data => {
          data.forEach(element => {
            users.push(new User(element.id, element.name, element.username, element.email));
          });
      },
      error: error => {
          console.error('There was an error!', error);
      }
  });

  return users;
  }

  public fetchSingleUser(userId: number): Observable<any> {
    return this.http.get<any>(this.API_URL + '/users/' + userId);
  }
}
