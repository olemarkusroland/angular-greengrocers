import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {
  http = inject(HttpClient)

  getProducts(): Observable<Item[]> {
    return this.http.get<Item[]>(environment.apiUrl)
  }
}
