import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculater',
  templateUrl: './calculater.component.html',
  styleUrls: ['./calculater.component.css']
})
export class CalculaterComponent implements OnInit {
a:number=0
b:number=0
result:number =0
  constructor() { }

  ngOnInit(): void {
  }

  onClickPlus(){
    console.log(this.a)
    console.log(this.b)
    this.result=this.a+this.b

  }
}
