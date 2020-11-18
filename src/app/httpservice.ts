import { Injectable } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  registerUser(data)
{
 
 return this.http.post(`http://${environment.url}:${environment.port}/saveUser`,data);

}

getData()
{
  return this.http.post(`http://${environment.url}:${environment.port}/getPatientData`,{});
}


deleteUser(data)
{
 
 return this.http.post(`http://${environment.url}:${environment.port}/deleteUser`,data);

}


editUser(data)
{
 
 return this.http.post(`http://${environment.url}:${environment.port}/editUser`,data);

}

}
