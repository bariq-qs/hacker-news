import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStories } from '../interface/stories';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private readonly API_URL = 'https://hacker-news.firebaseio.com/v0';

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getAllStories(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.API_URL}/askstories.json?print=pretty`)
  }

  getDetailStories(id: number): Observable<IStories> {
    return this.httpClient.get<IStories>(`${this.API_URL}/item/${id}.json?print=pretty`)
  }
}
