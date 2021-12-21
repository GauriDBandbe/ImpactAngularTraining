import { Component, OnInit } from '@angular/core';
import { TechnogolyList } from '../login/ProductList';
import { Dept ,Product} from '../model/model.component';
@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent {
  cityArray:string[] = ["Chennai", "Hyd", "Pune", "Mumbai", "Goa"];

  public deptObj:Dept = { deptno:10,  dname :"Accounts", loc : "Hyd" };

      public deptsArray:Dept[]  = [
        {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
				{deptno : 20, dname : "Sales",  loc :  "Pune"},
				{deptno : 30, dname : "Marketing",  loc :  "Hyd"},
				{deptno : 40, dname : "Operations",  loc :  "Chnnai"},
				{deptno : 50, dname : "Admin",  loc :  "Pune"},
				{deptno : 60, dname : "Finance",  loc :  "Hyd"},
				{deptno : 70, dname : "Testing",  loc :  "Mumbai"}
      ];

      technologyArray:string[]=["Angular", "React", "Node JS", "Express"];

      public ProductArray:Product[]  = [
         {ProductID : 101, ProductName : "Prod A", ProductPrice : 1000, ProductCategory :  "P123",ProductQty : 5,} ,
         {ProductID : 102, ProductName : "Prod B", ProductPrice : 1100, ProductCategory :  "K56",ProductQty : 10,} ,
         {ProductID : 103, ProductName : "Prod C", ProductPrice : 1200, ProductCategory :  "H4-56",ProductQty : 15,} ,
         {ProductID : 104, ProductName : "Prod D", ProductPrice : 1300, ProductCategory :  "NPH67",ProductQty : 18,} ,
         {ProductID : 105, ProductName : "Prod E", ProductPrice : 1400, ProductCategory :  "KL-123",ProductQty : 50,} ,
				
      ];

      public TechArray:TechnogolyList[]  = [
        {TechName : "Angular", TechDesc : "Front-End Dev Framework",  TechImg :  "assets/images/angularLogo.png"} ,			
        {TechName : "HTML", TechDesc : "Web pages development",  TechImg :  "assets/images/html.png"} ,
        {TechName : "CSS", TechDesc : "Defining the styles for web pages",  TechImg :  "assets/images/css.png"} ,
        {TechName : "Angular", TechDesc : "Front-End Dev Framework",  TechImg :  "assets/images/AngularFrontLogo.png"} ,
        {TechName : "HTML", TechDesc : "Web pages development",  TechImg :  "assets/images/html.png"} ,
        {TechName : "CSS", TechDesc : "Defining the styles for web pages",  TechImg :  "assets/images/css.png"} ,
        {TechName : "Chrome", TechDesc : "Designed to be the fastest web browser",  TechImg :  "assets/images/Chrome.png"} ,
        {TechName : "Angular", TechDesc : "Front-End Dev Framework",  TechImg :  "assets/images/AngularFrontLogo.png"} ,
      ];
}
