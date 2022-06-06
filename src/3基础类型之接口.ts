interface IUser{
    name:string
    age?:number //?代表可选属性
}
const user:IUser = {
    name:"121",
}

//只读属性

interface IUser1{
    readonly name1:string
}

const user1:IUser1 = {
    name1:"123"
}

// user1.name1 = 11; //报错 ，只能读取 不能更新

//枚举类型测试
enum FUNCTIONS{
    'function1'= 1,
    'function2',
    'function3',
    'function4'
}
enum FUNCTIONS1{
    'function1'= 1,
    'function2',
    'function3',
    'function4'
}

console.log(FUNCTIONS[1])
// console.log(FUNCTIONS.function1 === FUNCTIONS1.function1)  //这个是错误的 来自两个不同的枚举
console.log(FUNCTIONS[1] === FUNCTIONS1[1])

//函数类型接口
interface IFunc{
    (name:string):string
}

let func:IFunc = (a:string):string => a;

func("a");

//可索引类型
interface IStringArr{
    [index:number]:string|number
} 
let astr:IStringArr = ['1',2];
console.log(astr[0])
let aobj:IStringArr = {
    1:"1",
    2:"2"
}
console.log(aobj[1])

//类类型

//实现接口

interface IClass{
    name:string
}

class UserI implements IClass{
    name: string;
    constructor(a:string){
        this.name = a;
    }
}

let userI1 = new UserI("lee");
userI1.name = "lees";
console.log(userI1)

//继承接口

interface IClassE extends IClass{
    age :number;
}

class UserIE implements IClassE{
    name: string;
    age: number;
    constructor(name:string,age:number){
        this.name = name,
        this.age = age
    }
}

let userIe = new UserIE("lee",18);

console.log(userIe)

