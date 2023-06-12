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
  cost=55;
  tempreature= 23.3344;
  details={
    name:['kohli','Rohit'],
    score:['43','49']
  }
  blueClass=false;
  fontSize=16;
  images=[
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/238/200/300',
    'https://picsum.photos/id/239/200/300',
    'https://picsum.photos/id/236/200/300',
    'https://picsum.photos/id/235/200/300'
  ]

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

// Attribute Directive
//Structural Directives
