import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  constructor( private endvService: EnvService, private httpClient: HttpClient) {  }

  recuperarContraseña(correo:string):Observable<any> {
  
  return this.httpClient.post(this.endvService.API_URL + 'client/recovery', {correo} );

  }

}
