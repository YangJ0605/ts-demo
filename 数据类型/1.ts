let flag:boolean = false
let a:number = 1
let c:number = null
let d:string = 'dd'

const arr:number[] = [1,2,3]

const arr2:any[] = [2,'44']

const arr3:(string | number)[] = ['1','2',1]

const arr4:Array<number> = [1,2]
const arr5:Array<string> = ['1']

//元组 属于数组的类型 初始化的时候固定类型，固定长度
const yuan:[string, number] = ['1',2]
// 可以增加 但是只能增加指定类型
yuan.push('1')
yuan.push(2)
console.log(yuan)

//枚举
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat} //互相映射
console.log(Days)

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

enum Days2 {
    Sun=7,
    Mon=1,
    Tue=2,
    Wed,
    Thu,
    Fri,
    Sat
}
console.log(Days2)

enum Flag {
    success=1,
    error=-1
}
var f:Flag = Flag.success
console.log(f)

enum color {
    red='r',
    blue='b',
    // green
}
console.log(color)

const box:HTMLElement = document.getElementById('box')
// console.log(box)
box.style.width = '20px'
box.style.height = '20px'
box.style.background = 'red'

let xx:undefined

function fn():void {
    console.log('fn')
}

function fn2():number {
    return 1
}
function fn3():never {
    console.log('x')
    throw new Error('never')
}

fn()
console.log(fn2())
// fn3()

const obj:object = {}

function ff(x:number):number {
    return x+ 1
}
ff(11)
// 可选参数只能写到最后
// function ff3(xx?:string, yy:string) {
    
// }
function ff2(name:string = 'aaa', age?:number):string {
    return `${name}==>${age}`
}
ff2()

function rest(...args:number[]):number {
    let sum = 0
    args.forEach(arg => {
        sum += arg
    })
    return sum
}

console.log(rest(12.3,1,2))

//ts 函数重载

function add(num1:string, num2:string):string 
function add(num1:number, num2:number):number

function add(num1:string | number, num2:string | number) {
    if(typeof num1 === 'string' && typeof num2 === 'string') {
        return 'str =>' + num1 + num2
    } else if(typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    }
}

class Animal {
    public name:any;
    public constructor(name:any) {
        this.name = name
    }
}
let aaa = new Animal('zz')
console.log(aaa)
aaa.name = 'yy'
console.log(aaa)

class Animal2 {
    protected name:any;
    public constructor(name:any) {
        this.name = name
    }
}
let bbb = new Animal2('jj')
console.log(bbb.name)

// console.log(aaa)
