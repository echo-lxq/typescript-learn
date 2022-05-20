// let str:string = "hello"

// debugger

// console.log(str)

//基础数据类型
//声明一个变量: ts类型 = 值
let num:number = 10;
let str:string = "string";
let bool:boolean = false;

console.log(bool)

//元组 标识长度是固定的，内容跟类型也规定好
let tuple:[string,number,boolean] = ['string',18,true];
let n = tuple[1]
//无法通过索引给元组添加不存在的属性
//tuple[3]=100

//如果通过数组方法新增，必须元组中得支持此类型
tuple.push('zf');
let r = tuple.pop(); //pop()拿掉最后一项 赋值之后r值就为最后一项
console.log(r)

//数组类型：存放一类类型
let arr:number[] = [1,2];
let arr1:(number | string)[] = [1,'2'] //联合类型(number | string)
let arr2:Array<number|string> = [1,"2",2] //泛型
let arr3:any[] = [1,'2',{}] //任何类型不进行类型校验(最好不用)

//枚举类型 -- 一类类型放到一起 枚举中的默认值从0开始 只有数字才可以自行进行推算
//应用 -- 状态码、权限、类型...
enum USER_ROLE{
    USER = "abc",
    ADMIN = 0,
    MANAGER
}
//如果枚举中的值是数字，那么可以反举 
//USER_ROLE[2]可以 & USER_ROLE['abc']不行
//异构枚举，枚举中存放了不同类型 
//ts枚举编译出来的结果是个对象
console.log(USER_ROLE.ADMIN) //输出1

const enum STATUS_CODE{
    NOT_FOUND
}
//常亮枚举不会进行编译

//null 和 undefined
//是任何类型中的子类型，在严格模式下 null->null undefined->undefined

//void 类型， 一般用于函数的返回值，在一般情况下只接受null或者undefined
//在非严格模式下 null可以赋值给任何类型，严格模式下 null不能赋值给void
function af():void{
    return undefined;
}

//never类型 永远达不到的类型,never是任何类型的子类型
//1) 报错  2)死循环 3)判断的时候永远进不到某个判断
function myError():never{
    throw new Error();
}
// bool = myError();

function whileTrue():never{
    while(true){}
}

function byType(val:string){
    if(typeof val == "string"){
        val
    }else{
        val
    }
}

//对象类型 
const create = (obj:object)=>{

}
//除了基础教程其他都是对象类型
create([]);
create({});
create(function(){});

//js中还有两个类型 symbol bigInt
let s1:symbol = Symbol('123');
let s2 = Symbol('123');
console.log(s1===s2) //不相等两个symbol永远不相等

let num1 = Number.MAX_SAFE_INTEGER;
console.log(num1 + 1 === num1 +2) //超过最大值 结果相等
let big1 = BigInt(num1) + BigInt(1);
let big2 = BigInt(num1) + BigInt(2);
console.log(big1===big2) //结果为false -- 部分游览器还不支持Bigint

//string | number | boolean | null | undefined | never | 元组 | 数组 | object | void | any

//重复变量无法重新声明
// let name = "zf"; //报错，全局已经有name定义
//使用导出保证变量不受外界干扰
export{}