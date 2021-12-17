var Customer = /** @class */ (function () {
    function Customer(Custid, Custname, Custcity) {
        if (Custid === void 0) { Custid = 0; }
        if (Custname === void 0) { Custname = ""; }
        if (Custcity === void 0) { Custcity = ""; }
        this.Custid = 0;
        this.Custname = "";
        this.Custcity = "";
        this.Custid = Custid;
        this.Custname = Custname;
        this.Custcity = Custcity;
    }
    Customer.prototype.ShowDetails = function () {
        console.log("Customer Details  ::   Id : " + this.Custid + ", Name : " + this.Custname + ", City : " + this.Custcity);
    };
    return Customer;
}());
var c1 = new Customer();
var c2 = new Customer(10256);
var c3 = new Customer(10256, "Scott");
var c4 = new Customer(10256, "Scott", "Hyd");
c1.ShowDetails();
c2.ShowDetails();
c3.ShowDetails();
c4.ShowDetails();
