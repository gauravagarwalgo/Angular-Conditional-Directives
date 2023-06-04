import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ConditionalDirectives';

  videos=[
    {title: 'My Video 1',share:415,likes:257,dislikes:12,thumbnail:'assets/images/image1.jpg'},
    {title: 'My Video 1',share:215,likes:300,dislikes:12,thumbnail:'assets/images/image2.jpg'},
    {title: 'My Video 1',share:513,likes:105,dislikes:12,thumbnail:'assets/images/image3.jpg'}
  ]

  mostLikedVideo=this.getMostLikedVideo();
  getMostLikedVideo(){
    let videoCopy=[...this.videos] // creating copy of video object so that we don't modify the original one
    //sort videoCopy in descending order of likes and get first value. so we will get most liked.
    return videoCopy.sort((curr,next)=>next.likes-curr.likes)[0];
  }
}
