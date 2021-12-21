import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class Dept
{
  deptno:number = 0;
  dname:string  = "";
  loc:string  = "";
}

export class Product
{
  ProductID:number = 0;
  ProductName:string  = "";
  ProductPrice:number = 0;
  ProductCategory:string  = "";
  ProductQty:number = 0;
}


