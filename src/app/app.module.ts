import {NgModule} from "@angular/core";
import  {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import { PostComponent } from './post/post.component';

@NgModule({
  imports:[
    BrowserModule
  ],
  declarations:[
    AppComponent,
    PostComponent
  ],
  bootstrap:[AppComponent]
})
export  class AppModule{



}




// Module break code into seperate files
// It's export the module so that it can be used in other modules

// Product ---


// App is the root of the application
