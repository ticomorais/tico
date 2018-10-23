import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  allBlogs: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.allBlogs().subscribe(data => {
      console.log(data);
      this.allBlogs = data;
    })
  
  }

}
