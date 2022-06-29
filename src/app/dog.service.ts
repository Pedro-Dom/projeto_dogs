import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from './dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private httpClient: HttpClient) { }

  obterDogs(): Observable<Dog>{
    return this.httpClient.get<Dog>(`https://random.dog/woof.json`);
  }
}
