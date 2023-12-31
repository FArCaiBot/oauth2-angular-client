import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  resourceurl = environment.resource_url;
  constructor(private httpClient: HttpClient) {}

  public user(): Observable<any> {
    return this.httpClient.get<any>(this.resourceurl + '/user');
  }

  public admin(): Observable<any> {
    return this.httpClient.get<any>(this.resourceurl + '/admin');
  }
}
