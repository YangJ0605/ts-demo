function logClass(target:any) {
    console.log(target)
    target.prototype.apiUrl ='xx'
}

@logClass
class HttpClient {
    constructor() {

    }
 }

 const v:any = new HttpClient()
 console.log(v.apiUrl)



 
