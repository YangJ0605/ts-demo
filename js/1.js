"use strict";
var flag = false;
var a = 1;
var c = null;
var d = 'dd';
var arr = [1, 2, 3];
var arr2 = [2, '44'];
var arr3 = ['1', '2', 1];
var arr4 = [1, 2];
var arr5 = ['1'];
//元组 属于数组的类型 初始化的时候固定类型，固定长度
var yuan = ['1', 2];
// 可以增加 但是只能增加指定类型
yuan.push('1');
yuan.push(2);
console.log(yuan);
//枚举
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {})); //互相映射
console.log(Days);
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
var Days2;
(function (Days2) {
    Days2[Days2["Sun"] = 7] = "Sun";
    Days2[Days2["Mon"] = 1] = "Mon";
    Days2[Days2["Tue"] = 2] = "Tue";
    Days2[Days2["Wed"] = 3] = "Wed";
    Days2[Days2["Thu"] = 4] = "Thu";
    Days2[Days2["Fri"] = 5] = "Fri";
    Days2[Days2["Sat"] = 6] = "Sat";
})(Days2 || (Days2 = {}));
console.log(Days2);
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f);
var color;
(function (color) {
    color["red"] = "r";
    color["blue"] = "b";
    // green
})(color || (color = {}));
console.log(color);
var box = document.getElementById('box');
// console.log(box)
box.style.width = '20px';
box.style.height = '20px';
box.style.background = 'red';
var xx;
function fn() {
    console.log('fn');
}
function fn2() {
    return 1;
}
function fn3() {
    console.log('x');
    throw new Error('never');
}
fn();
console.log(fn2());
// fn3()
var obj = {};
function ff(x) {
    return x + 1;
}
ff(11);
// 可选参数只能写到最后
// function ff3(xx?:string, yy:string) {
// }
function ff2(name, age) {
    if (name === void 0) { name = 'aaa'; }
    return name + "==>" + age;
}
ff2();
function rest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    args.forEach(function (arg) {
        sum += arg;
    });
    return sum;
}
console.log(rest(12.3, 1, 2));
function add(num1, num2) {
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return 'str =>' + num1 + num2;
    }
    else if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
}
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var aaa = new Animal('zz');
console.log(aaa);
aaa.name = 'yy';
console.log(aaa);
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
var bbb = new Animal2('jj');
console.log(bbb.name);
// console.log(aaa)
