var Product = /** @class */ (function () {
    function Product(ProductId) {
        if (ProductId === void 0) { ProductId = 0; }
        this.productid = 0;
        this.product_name = "";
        this.unit_price = 0;
        this.qty = 0;
        this.productid = ProductId;
    }
    Object.defineProperty(Product.prototype, "ProductId", {
        get: function () {
            return this.productid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productname", {
        get: function () {
            return this.product_name;
        },
        set: function (value) {
            this.product_name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "unitprice", {
        get: function () {
            return this.unit_price;
        },
        set: function (value) {
            this.unit_price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Quantity", {
        get: function () {
            return this.qty;
        },
        set: function (value) {
            this.qty = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var prodObj = new Product(101);
prodObj.productname = "ABC";
prodObj.unitprice = 1000;
prodObj.Quantity = 15;
console.log("Product Details:");
console.log("Product ID:" + prodObj.ProductId);
console.log("Product Name: " + prodObj.productname);
console.log("Product Unit Price : " + prodObj.unitprice);
console.log("Product Quantity :" + prodObj.Quantity);
