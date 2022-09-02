import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService<T> {
  private httpClient: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = http;
    this.baseUrl = baseUrl;
  }

  public getAll(resource: string): T[] {
    let data: T[] = [];
    this.httpClient.get<T[]>(this.baseUrl + resource).subscribe(result => {
      data.push(...result.map(obj => ({...obj})));
    }, error => console.error(error));
    return data;
  }
}
