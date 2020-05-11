"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var cc;
(function (cc) {
    function f() {
        console.log('f');
        return function (target) {
            console.log('f 装饰');
        };
    }
    function g() {
        console.log('g');
        return function (target) {
            console.log('g 装饰');
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            f(),
            g()
        ], Person);
        return Person;
    }());
})(cc || (cc = {}));
