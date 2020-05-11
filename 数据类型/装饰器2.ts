function logClass(target:any) {
    console.log(target)
    console.log('类装饰器1')
}

function logClass2(target:any) {
    console.log(target)
    console.log('类装饰器2')
}

function logAttr(val:any) {
    return function(target:any, attrName:any) {
        console.log('属性装饰器')
        console.log(val)
        console.log(target,attrName)
        
    }
    
}

function logMethod(target:any, methodName:string, desc:any) {
    console.log('方法装饰器')
    console.log(target,methodName,desc)
}

function logParams(target:any, methodName:string, paramIndex:number) {
    console.log('参数装饰器')
    console.log(target,methodName,paramIndex)
}


@logClass
@logClass2
class Demo {
    @logAttr('tttt')
    name:string = 'xxx'
    @logMethod
    getName(@logParams age:number, @logParams t:string):void {
        console.log(this.name)
    }
}

//属性 》》 参数 》》 方法 》》 类