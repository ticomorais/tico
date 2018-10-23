import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allBlogs(){
    return this._http.get('/api/allPages');
  }

  createBlog(newBlog: any){
    return this._http.post('/api/Pages', newBlog);
  }
  removePage(blog: any){
    console.log('remove from service');
    return this._http.delete(`/api/Pages/${blog._id}`, blog)

}
  singlePage(id: any){
    console.log('singlerest from service');
    return this._http.get(`/api/Pages/${id}`)
  }
  editBlog(edition: any){
    console.log("edit trigged", edition)
    return this._http.put(`/api/Pages/${edition['_id']}`, edition)

  
}

   
}
