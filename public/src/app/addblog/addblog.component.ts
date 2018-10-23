import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  newBlog: any;
  allBlogs: any;
  editing: any;
  constructor(private _httpService: HttpService){}


  ngOnInit() {
    this.newBlog = {title:"", category:"", content: ""};
    this.getAllBlogs();
    // this._httpService.allBlogs().subscribe(data => {
    //   this.allBlogs = data;
    // })
    // this._httpService.allBlogs().subscribe(data => console.log(data));

  }
  getAllBlogs(){
    let obs = this._httpService.allBlogs();
    obs.subscribe(data => {
      this.allBlogs =data;
    })
  }
  addBlog(){
    this._httpService.createBlog(this.newBlog).subscribe(data => {
      console.log(data);
    })
  }
  editBlog(b: any){
    this.editing = b;
    console.log("blog", b);

  }
  deleteBlog(b: any){
    console.log("blog info", b);
    let obs = this._httpService.removePage(b);
    obs.subscribe(data=>{
      console.log(data);
      this.getAllBlogs();
    })
  }

}
 