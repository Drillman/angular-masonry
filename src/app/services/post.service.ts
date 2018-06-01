import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlPosts = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getTitles(callback) {
    let titles = []
    this.http.get(this.urlPosts)
      .subscribe(data => {
        while(titles.length < 100){
          var id = this.randomIntFromInterval(0,99)
          titles.push(data[id].title)
        }
        callback(titles)
     })
  }

  randomIntFromInterval(min,max)
  {
      return Math.floor(Math.random()*(max-min+1)+min);
  }
}
