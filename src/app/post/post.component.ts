import { Component, Input, Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  constructor() {
    console.log("constructor"+ this.postURL)
  }

  ngOnInit(){
     console.log("ngOnInit "+this.postURL);
  }





  @Input('img') postURL='';
  @Output() imageSelected =new EventEmitter<string>();

}
