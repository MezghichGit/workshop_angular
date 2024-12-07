import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // injection d'un service de type HttpClient
  constructor(private http:HttpClient) { }


  getAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
