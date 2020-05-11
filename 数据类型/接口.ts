namespace q {
    function tt(name:string):void {
        console.log('xx')
    }
    tt('11')
    function tt2(user:{name:string}):void {
        
    }
    tt2({name:'x'})


    interface User {
        username:string;
        password:string;
        age?:number;
    }
    function tt3(user:User) {
        console.log(user)
    }
    tt3({username:'x',password:'y',age:18})
    const obj = {username:'x',password:'y', age:18, sex:1}
    tt3(obj)

    interface encrypt {
        (key:string, value:string): string
    }

    const md5:encrypt = function(key:string, value:string):string {
        return key + value
    }

    interface UserArr {
        [index:number]:string
    }
    const arr:UserArr = ['1','2']

    interface UserObj {
        [index:string]:string
    }
    const obj2:UserObj = {name:'x'}

    interface ClassAnimal {
        name:string;
        run():void;
    }

    class Animal22 implements ClassAnimal {
        name:string = '1'
        run():void {
            console.log('run~~')
        }
    }

    interface ClassDog extends ClassAnimal {

    }

    class Cc {
        age:number
        name:string
        constructor(age:number,name:string) {
            this.age = age
            this.name = name
        }
    }

    interface cc extends Cc {
        sex:string
    }

    const aa:cc = {age:12, name:'xx', sex:'男'}
}