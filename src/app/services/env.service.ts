import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://mante.hosting.acm.org/api_clinica_dental/public/';
  constructor() { }
}
