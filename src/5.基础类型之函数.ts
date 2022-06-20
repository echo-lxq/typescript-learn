
//函数返回值与形参类型定义
function say(str:string):string{
    console.log(str);
    return str;
}

//可选参数 与参数默认值
function doSth(sth:string,sth1?:number):string{
    console.log(sth + sth1);
    return sth + sth1;   
}

doSth("123");

doSth("123",4562)

// 剩余参数（可变参数）...
function sayP(str:string,...str1:string[]):string{
    console.log(str);
    return str;
}
sayP("1","2","3","4","5")

//函数重载
function chooseVal(x:any):any{
    if(typeof x == "object"){
        let cVal = x.name;
        return(cVal);
    }
    else if(typeof x == "boolean"){
        let cVal = false;
        return(cVal);
    }
}

let cVal1 = chooseVal({name:"1243"});
console.log(cVal1);

let cVal2 = chooseVal(false);
console.log(cVal2)

//泛型
function fData<T>(str:T):T{
    return str;
}
console.log(fData(0))
console.log(fData("name"))

//class 上泛型约束 增加类的可扩展

interface TFood{
    name :string
    tag :string
    price:number
}

class Person<TFood>{
    food:TFood
    constructor (a:TFood){
        this.food = a;
    }
}

//交叉类型
interface IUser{
    name:string | number
}



















export{}