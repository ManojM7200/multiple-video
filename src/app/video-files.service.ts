import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoFilesService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000";
  getVideos(){
    return this.http.get(this.url+'/videos');
  }
}
