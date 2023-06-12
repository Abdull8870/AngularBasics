import {Component} from "@angular/core";

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
  // S
})
export class AppComponent{

  name='Abdul'
  imageURL='https://picsum.photos/id/237/200/300'
  currentDate= new Date();

  getName(){
    return this.name.toLowerCase();
  }

  changeImage(e:KeyboardEvent){
    this.imageURL=(e.target as HTMLInputElement).value;
  }

  logImage(event: string) {
    console.log(event)
  }


}


//Mvc pattern - model view controller

//Model== Data
//View == HTML/CSS
//Controller = TypesScript class
