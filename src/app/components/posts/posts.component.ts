import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  
  constructor(private postService: PostService, private http: HttpClient) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    var titles
    var res = []
    var randomIntFromInterval = this.randomIntFromInterval
      this.postService.getTitles(function(data){
        titles = data
        titles.forEach(function(title){
          var width = randomIntFromInterval(200, 900)
          var height = randomIntFromInterval(200, 900)
          res.push({title: title, img: 'https://placeimg.com/'+width+'/'+height+'/any'});
        })
      });
    this.posts = res
      
  }
  randomIntFromInterval(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }
}
