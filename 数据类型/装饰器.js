// namespace cc {
//     function f() {
//         console.log('f')
//         return function(target:any) {
//             console.log('f 装饰')
//         }
//     }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//     function g() {
//         console.log('g')
//         return function(target:any) {
//             console.log('g 装饰')
//         }
//     }
//     @f()
//     @g()
//     class Person {
//     }
// }
// 类装饰器
var abc;
(function (abc) {
    // function test1(target:Function) {
    //     console.log(target)
    // }
    // @test1
    function replace(target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.newname = 'newname';
                _this.age = 18;
                return _this;
            }
            return class_1;
        }(target));
    }
    var Demo = /** @class */ (function () {
        function Demo() {
            this.oldname = 'oldname';
        }
        Demo = __decorate([
            replace
        ], Demo);
        return Demo;
    }());
    console.log(new Demo());
})(abc || (abc = {}));
