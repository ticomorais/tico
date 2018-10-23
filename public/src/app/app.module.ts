import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { UiModule } from './ui/ui.module';
import { AddblogComponent } from './addblog/addblog.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { EditblogComponent } from './editblog/editblog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    BlogComponent,
    AddblogComponent,
    EditblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
