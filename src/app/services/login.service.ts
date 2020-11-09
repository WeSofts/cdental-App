import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private envService: EnvService, private http: HttpClient) { }

  loginClient(body: any): Observable<any> {
    return this.http.post(this.envService.API_URL + 'client/signin', body);
  }
}
