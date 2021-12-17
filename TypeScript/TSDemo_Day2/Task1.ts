class Customer
{
    public Custid:number =0;
    public Custname:string="";
    public Custcity:string="";

    constructor(Custid:number = 0,Custname:string="",Custcity:string="")
    {
      this.Custid=Custid;
      this.Custname=Custname;
      this.Custcity=Custcity;
    } 
    public ShowDetails() :void
    {
        console.log("Customer Details  ::   Id : "+this.Custid+", Name : "+this.Custname +", City : "+this.Custcity);
    }
}

let c1:Customer = new Customer();
let c2:Customer = new Customer(10256);
let c3:Customer = new Customer(10256, "Scott");
let c4:Customer = new Customer(10256, "Scott", "Hyd");

c1.ShowDetails();
c2.ShowDetails();
c3.ShowDetails();
c4.ShowDetails();