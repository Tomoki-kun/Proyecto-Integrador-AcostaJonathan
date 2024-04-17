import { Injectable } from '@angular/core';
import { Environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  URL = Environment.URL + 'skill/'
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.URL + `detail/${id}`);
  }

  public save(skills: Skills): Observable<any>
  {
    return this.httpClient.post<any>(this.URL + 'create', skills);
  }

  public update(id: number, skill: Skills): Observable<any>
  {
    return this.httpClient.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>
  {
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}