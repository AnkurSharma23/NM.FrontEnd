import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private apiUrl = 'https://localhost:7000/api/Property?top=100&skip=0';

  constructor(private http: HttpClient) { }

  getProperties(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
