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
    this.result=this.a+this.b

  }
  onClickSub(){
  this.result = this.a-this.b
  }
  onClickMulti(){
  this.result = this.a*this.b
  }
  onClickDiv(){
  if (this.b==0){
    alert("Phép Chia Sai.Số B Khác 0")
  } else {
    this.result = this.a/this.b
  }
  }
}
