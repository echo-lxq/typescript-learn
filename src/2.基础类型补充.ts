//类型标注 -- 什么时候需要标注类型，什么时候不需要标注类型
//ts内部会有自动推导的功能

let name = "string"; //如果默认初始化的时候 会进行类型推导不需要声明类型

let num:Number = 123; //?number 和 Number
//number 用来标识他的基础数据类型是什么 Number类 也是一个类型
// (11).toString()
let num1:number = 11;
let num2:Number = 11;
let num3:number = Number(11); //将11转为number类型 还是 number
// let num4:number = new Number(11); //报错 类实例为对象



export{};