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
var CategoryService = /** @class */ (function () {
    function CategoryService() {
        this.categories = [];
    }
    CategoryService.prototype.add = function (category) {
        this.categories.push(category);
    };
    CategoryService.prototype.getAll = function () {
        return this.categories;
    };
    CategoryService.prototype.getById = function (id) {
        return this.categories.find(function (category) { return category.id === id; });
    };
    CategoryService.prototype["delete"] = function (id) {
        this.categories = this.categories.filter(function (category) { return category.id != id; });
    };
    CategoryService.prototype.update = function (id, payload) {
        var index = this.categories.findIndex(function (category) { return category.id == id; });
        var updatedItem = __assign(__assign({}, this.categories[index]), payload);
        this.categories.splice(index, 1, updatedItem);
    };
    return CategoryService;
}());
export { CategoryService };
