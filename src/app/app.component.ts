import { Component,OnInit } from '@angular/core';
import { VideoFilesService } from './video-files.service';
class Type{
  mime:string="";
  ext:string="";
}
class Video{
  name:string="";
  type:Type = new Type();
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  videos: Array<Video> = [];
  videoUrl:string="";
  constructor(private videoService:VideoFilesService){

  }
  ngOnInit(){
    this.videoService.getVideos().subscribe((data:any)=>{
      this.videos = data["videos"];
    });
    this.videoUrl =this.videoService.url + "/public"
  }
  toggleVideo(index:any){
    console.log(index);
  }
}
