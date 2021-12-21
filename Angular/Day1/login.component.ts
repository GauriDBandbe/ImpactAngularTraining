import { Component, OnInit } from '@angular/core'
import { ProductList } from './ProductList';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ProductID:number = 0;
  ProductName:string = "";
    UnitPrice:number  = 0
    Quantity:number = 0;
    isButtonDisabled:boolean = false;
    Total:number = 0;
    ProductCategory:string="";

    CalProductAmt_click()
    {
      if(this.ProductName != ""  &&  this.UnitPrice  != 0 && this.Quantity != 0)
      {
        this.Total = this.UnitPrice*this.Quantity;
      }
      else
      {
        this.Total = this.Total  + 1;

        if(this.Total == 3)
        {
          this.isButtonDisabled = true;
        }
      }
    }

    ProdArray : ProductList[] =[];
    AddProductArray_Click(){   
      this.ProdArray.push({ ProdID:this.ProductID ,ProdName:this.ProductName ,ProdPrice:this.UnitPrice,
      ProdCategory:this.ProductCategory,ProdQty:this.Quantity})
            
    }
}

