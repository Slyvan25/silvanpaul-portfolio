import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { NavItem } from './Interfaces/NavItem';


@Injectable({
  providedIn: 'root'
})
export class NavitemService {
  private uri = ''
  constructor(private http:HttpClient) {
    this.uri = `${environment.API_URL}/navitems`
   }

   getNavItems(): Observable<NavItem[]> {
     return this.http.get<NavItem[]>(this.uri)
   }
}
