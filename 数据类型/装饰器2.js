var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logClass(target) {
    console.log(target);
    console.log('类装饰器1');
}
function logClass2(target) {
    console.log(target);
    console.log('类装饰器2');
}
function logAttr(val) {
    return function (target, attrName) {
        console.log('属性装饰器');
        console.log(val);
        console.log(target, attrName);
    };
}
function logMethod(target, methodName, desc) {
    console.log('方法装饰器');
    console.log(target, methodName, desc);
}
function logParams(target, methodName, paramIndex) {
    console.log('参数装饰器');
    console.log(target, methodName, paramIndex);
}
var Demo = /** @class */ (function () {
    function Demo() {
        this.name = 'xxx';
    }
    Demo.prototype.getName = function (age, t) {
        console.log(this.name);
    };
    __decorate([
        logAttr('tttt')
    ], Demo.prototype, "name");
    __decorate([
        logMethod,
        __param(0, logParams), __param(1, logParams)
    ], Demo.prototype, "getName");
    Demo = __decorate([
        logClass,
        logClass2
    ], Demo);
    return Demo;
}());
//属性 》》 参数 》》 方法 》》 类
