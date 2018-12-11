import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'I Love Thailand 1234';

  // Explicit
   myTitle: string;  // Demo Explicit Variable Type String
   myColor: string;
   myNumber;
   mySize: string;

  constructor() {}

  ngOnInit(): void {
    
    this.myTitle = "Doramon";
    this.myColor = '#FFFF00';
    this.myNumber = 0;
    this.mySize = '100px'

  }

  testClick(){
    console.log('You Click Test');
    this.myNumber += 1;
  }




} // AppComponent Class
