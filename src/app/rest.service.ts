import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  Url = " http://localhost:3000/users";

  // fetch data from the server
  getUsers() : Observable<any> {
    return this.http.get(this.Url);
  }

  // insert data to server
  insertData (userObj : User) : Observable<any> {
    let header = {'content-type' : 'application/json'};
    let body = JSON.stringify(userObj);

    console.log("data to be inserted " + body);
    return this.http.post(this.Url, body, {'headers': header});
  }

  // delete data from server
  deleteRecord(record : string):Observable<any> {
    let deleteURL = this.Url + "/" + record;
    console.log("URL : " + deleteURL);
    return this.http.delete(deleteURL);
  }

}
