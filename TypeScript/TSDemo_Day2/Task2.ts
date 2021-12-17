class Product{
    readonly productid:number=0;
    private product_name:string="";
    private unit_price:number=0;
    private qty:number=0;

    constructor(ProductId:number=0)
    {
        this.productid=ProductId;
    }
    public get ProductId():number
    {
        return this.productid;
    }
    public get productname():string
    {
        return this.product_name;
    }
    public set productname(value:string)
    {
        this.product_name = value;
    }

    public get unitprice():number
    {
        return this.unit_price;
    }
    public set unitprice(value:number)
    {
        this.unit_price = value;
    }

    public get Quantity():number
    {
        return this.qty;
    }
    public set Quantity(value:number)
    {
        this.qty = value;
    }
}


let prodObj:Product = new Product(101);
prodObj.productname = "ABC"; 
prodObj.unitprice = 1000; 
prodObj.Quantity = 15; 

console.log("Product Details:")
console.log("Product ID:"+prodObj.ProductId);
console.log("Product Name: "+prodObj.productname) ;
console.log("Product Unit Price : "+prodObj.unitprice);
console.log("Product Quantity :"+prodObj.Quantity);