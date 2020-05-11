namespace fanxin {
    // function createArr(length:number, value:any):Array<any> {
    //     let res = []
    //     return []
    // }

    function createArr<T>(length:number,value:T):Array<T> {
        const res:T[]= []

        return res
    }

    createArr<string>(3, 'string')

    function tt<T>(val:T):T { //泛型
        return val
    }
    tt<string>('1')
    
    interface ConfigFn<T> {
        url:T;
        success:(x:T,y:T) => T
    }

    let config:ConfigFn<string> = {
        url:'www.cxx',
        success:(x:string, y:string):string => {
            return x + y
        } 
    }

    class DbUser {
        username:string;
        password:string;
    }

    class MySql {
        add(user:DbUser):boolean {

            if(user.username) {
                return true
            }
            return false
        }
    }

    const user11 = new DbUser()
    user11.username = 'xx'
    user11.password = 'yy'

    const sql = new MySql()

    sql.add(user11)
}


namespace U {
    export class User {
        name:string;
        age:number;
        constructor(name:string, age:number) {
            this.age = age
            this.name = name
        }
    }
    export const a:number = 33
}

console.log(U.User, U.a)