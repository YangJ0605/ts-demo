// namespace cc {
//     function f() {
//         console.log('f')
//         return function(target:any) {
//             console.log('f 装饰')
//         }
//     }

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
namespace abc {
    // function test1(target:Function) {
    //     console.log(target)
    // }
    // @test1

    function replace<T extends {new(...args:any[]):{}}>(target:T) {
        return class extends target {
            newname = 'newname'
            age=18
        }
    }
    @replace
    class Demo {
        oldname:string = 'oldname' 
    }
    console.log(new Demo())
}

namespace xxx {
    class Person {
        public name:string
        constructor(name:string) {
            this.name = name
        }
    static age = 18    
    }
    
}

namespace yyy {
    // 标准 子类集成必须要有eat
    abstract class Animal {
        abstract eat():any
    }

    class Dog extends Animal {
        eat() {
            
        }
    }
}