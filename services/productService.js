var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = [];
    }
    ProductService.prototype.add = function (product) {
        this.products.push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.products;
    };
    ProductService.prototype.getById = function (id) {
        return this.products.find(function (product) { return product.id === id; });
    };
    ProductService.prototype["delete"] = function (id) {
        this.products = this.products.filter(function (product) { return product.id != id; });
    };
    ProductService.prototype.update = function (id, payload) {
        var index = this.products.findIndex(function (product) { return product.id == id; });
        var updatedItem = __assign(__assign({}, this.products[index]), payload);
        this.products.splice(index, 1, updatedItem);
    };
    return ProductService;
}());
export { ProductService };
