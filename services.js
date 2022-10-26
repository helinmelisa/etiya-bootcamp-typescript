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
var Service = /** @class */ (function () {
    function Service() {
        this.items = [];
    }
    Service.prototype.add = function (item) {
        this.items.push(item);
    };
    Service.prototype.getAll = function () {
        return this.items;
    };
    Service.prototype.getById = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    Service.prototype["delete"] = function (id) {
        this.items = this.items.filter(function (item) { return (item.id != id); });
    };
    Service.prototype.update = function (id, payload) {
        var index = this.items.findIndex(function (item) { return (item.id == id); });
        var updatedItem = __assign(__assign({}, this.items[index]), payload);
        this.items.splice(index, 1, updatedItem);
    };
    return Service;
}());
var productService = new Service();
productService.add({ id: 1, name: "laptop", price: 100, category: { id: "kategori1", name: "teknoloji", desc: "elektronik" } });
productService.add({ id: 2, name: "desktop", price: 150, category: { id: "kategori1", name: "teknoloji", desc: "elektronik" } });
productService.add({ id: 3, name: "televizyon", price: 200, category: { id: "kategori1", name: "teknoloji", desc: "elektronik" } });
productService.add({ id: 5, name: "telefon", price: 300, category: { id: "kategori1", name: "teknoloji", desc: "elektronik" } });
console.log(productService.getAll());
//productService.delete(1)
//console.log(productService.getAll());
//console.log("**********");
productService.update(2, { name: "desktop++", price: 800 });
productService.update(3, { name: "televizyon++", price: 900, category: { id: "kategori1", name: "elektronik", desc: "teknoloji" } });
console.log("**********");
console.log(productService.getAll());
