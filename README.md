# TS学习文档 #

## 什么是TS ##
TypeScript--遵循ES7、ES6、ES5语法规范

TypeScript是JavaScrpit的超集，扩展了JavaScript语法

- TypeScript更像后端JAVA让Js可以开发大型企业应用

- TS提供的类型系统可以帮助我们在写代码时提供丰富的语法提示

- 在编写代码时会对代码进行类型检查从而避免很多线上错误

## 环境配置及编译 ##
1. **全局编译TS文件**

全局安装typescript对TS进行编译

        npm install typescript -g
    	tsc --init #生成tsconfig.json

PS. tsc不是内部命令报错--配置全局变量
    
   执行 npm install 的时候 就会自动生成package-lock.json文件
    
step1.新建系统变量

    变量名: NODE_PATH
    
    变量值: npm目录路径/nodejs路径（dos输入npm config get prefix 可以直接获取npm的路径 ）
step2.找到 用户变量 和 系统变量 里的 path , 在末尾添加上 %NODE_PATH%
![](./images/path_config.png)

**tsconfig.json**--文件中存放编译选项--TypeScript编译为JavaScript


2.**文件编译**

①.新建ts文件使用ts语法编写之后 cd到对应文件夹下 使用 **tsc** 命令将ts文件转为js文件（手动版）

![](./images/global_compilation.png)

vscode终端输入tsc编译命令报错

tsc : *无法加载文件 F:\npm_resouse\tsc.ps1，因为在此系统上禁止运行脚本*

**解决**

1.管理员身份运行vs code

2.在终端执行：get-ExecutionPolicy，显示Restricted

3.在终端执行：set-ExecutionPolicy(不可以的话换set-ExecutionPolicy -Scope CurrentUser)  后 RemoteSigned

4.在终端执行：get-ExecutionPolicy，显示RemoteSigned

![](./images/console-repair.png)

②.vscode中使用 **tsc-w** 命令，可以让.ts文件保存之后实时自动转换成.js文件

3.**不想编译，想直接运行ts文件**

①.vscode安装code-runer 

②.npm安装包 ts-node

	//有这个包之后才可以调用code-runner运行ts文件
    npm install ts-node -g

![](./images/code-runner.png)

## 构建工具搭建TS解析环境 ##

1.**rollup构建ts**

①.初始化

    npm init -y //生成package.json 记录项目中的依赖包

![](./images/package.json.png)

②.安装roolup
    
    npm install roolup typescript rollup-plugin-typescript2 @rollup/plugin-node-resolve rollup-plugin-serve -D
    # rollup -- 打包的
    # typescript -- ts编译成js的
	# rollup-plugin-typescript2 -- rollup跟ts关联
    # @rollup/plugin-node-resolve -- 解析第三方模块
    # rollup-plugin-serve -- 启动本地环境

③.新建rollup配置文件 rollup.config.js

![](./images/rollupconfig.png)

**ps.**运行 npm run dev报错如上图(dev 为package.json的scripts配置项)

![](./images/npm-run-dev.png)

①.package.json 文件有一个 scripts 字段，可以用于指定脚本命令，供 npm 直接调用。

注：npm run 为每条命令提供了** pre-** 和** post-** 两个钩子（hook）。以 npm run test 为例，如果我们的 scripts 字段规定了 pretest 和 posttest：

则会先执行 pretest 任务，再执行 test 任务，完成 test 任务后即执行 posttest 任务。
可以简单的将二者理解为：预执行、后执行；

--**npm**的全称是**Node Package Manager** -- Nodejs软件包管理工具

解决：更改配置文件tsconfig.json中module为ESNEXT
![](./images/module.png)

①.es6

ES6就是ECMAScript6是新版本JavaScript语言的标准，它的目标是使得JavaScript语言可以用来编写复杂的大型应用程序，成为企业级开发语言。15年发布

##  TS语言学习  ##
1.**基础数据类型**

**ps.枚举跟数组**

枚举是标签（定死的），数组是容器（存放数据）

枚举是值类型，数组是引用类型

枚举是常量的集合，数组是变量的集合

枚举对象在任一时刻只能有一个常量值，数组对象在任一时刻可以有多个值

**枚举的目的：**
比如说你现在声明一个变量
string week ;要给它赋值，很明显它的值应该是从星期一到星期日，也就是说你只能给它赋这七个中的一个才有意义。
为了防止用户录入了错误的信息，设置了枚举变量，规定只能选择此变量中的一个值。
其实这符合微软的一个通常的做法：能不让用户自己录入信息的一般都给出了一大堆的范围，让我们自己选择。

//基础数据类型
//声明一个变量: ts类型 = 值

    let num:number = 10;
    let str:string = "string";
    let bool:boolean = false;

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
    bool = myError();
    
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
    
## 2.基础数据类型补充 ##

***A.part1***

类型标注 -- 什么时候需要标注类型，什么时候不需要标注类型
    //ts内部会有自动推导的功能
    
    let name = "string"; //如果默认初始化的时候 会进行类型推导不需要声明类型
    
    let num:Number = 123; //?number 和 Number
    //number 用来标识他的基础数据类型是什么 Number类 也是一个类型
    // (11).toString()
    let num1:number = 11;
    let num2:Number = 11;
    let num3:number = Number(11); //将11转为number类型 还是 number
    // let num4:number = new Number(11); //报错 类实例为对象


**unknown** 实际上就是一个类型安全的any

unknown 类型的变量，不能直接赋值给其他变量

**对象 object 与 {}**

    //加上？ 标识有没有都可以
    let b:{name: string ,age?:number};
    b = {name:"123"};
    b.name = "456";
	//[propName:string]:any 表示任意类型的属性
	let c:{name: string ,[propName:string]:any};
	//定义d为函数类型 且定义返回值 -- 设置函数结构的类型声明
	let d = (a:number,b:number)=>number;
	d = function(n1,n2){
		return n1+n2;
	}

**PS.可枚举**

可枚举的属性是那些可以通过for..in循环迭代的属性

以使用Object.defineProperty方法创build您自己的**不可枚举**的属性

**Enumerable**：指定属性是否可以在for / in循环中返回。

简单来说，用户定义的属性都是可枚举的，而内置对象不可枚举。
一种情况除外：当属性的原型是继承于其它对象原型时，这时用户定义的属性就是不可枚举的

**原型链**

原型链通俗易懂的理解就是可以把它想象成一个链条，互相连接构成一整串链子！

而原型链中就是实例对象和原型对象之间的链接。

**每个函数都有一个prototype属性**，这个**prototype属性**就是我们的**原型对象**，

我们拿这个函数通过**new构造函数**创建出来的实例对象，

**这个实例对象自己会有一个指针(_proto_)指向他的构造函数的原型对象**！

这样构造函数和实例对象之间就通过( _proto_ )连接在一起形成了一条链子。


*****B.part2*****

**this没有隐式的any**

当你在类的外部使用this关键字时，它会默认获得any类型。 比如，假设有一个Point类，并且我们要添加一个函数做为它的方法：

    class Point {
    constructor(public x, public y) {}
    getDistance(p: Point) {
    	let dx = p.x - this.x;
    	let dy = p.y - this.y;
    	return Math.sqrt(dx ** 2 + dy ** 2);
    }
    }
    // ...
    // Reopen the interface.
    interface Point {
    	distanceFromOrigin(point: Point): number;
    }
    Point.prototype.distanceFromOrigin = function(point: Point) {
    	return this.getDistance({ x: 0, y: 0});
    }

这就产生了我们上面提到的错误 - 如果我们错误地拼写了**getDistance**并不会得到一个错误。 正因此，TypeScript有**noImplicitThis**选项。 当设置了它，TypeScript会产生一个错误当没有明确指定类型（或通过类型推断）的**this**被使用时。 解决的方法是在接口或函数上使用指定了类型的**this**参数：

**关于number类型**
和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。

    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;

**类型断言**

类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 **它没有运行时的影响，只是在编译阶段起作用**。 TypeScript会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是**“尖括号”**语法：

    let someValue: any = "this is a string";
    
    let strLength: number = (<string>someValue).length;

另一个为**as**语法：

    let someValue: any = "this is a string";
    
    let strLength: number = (someValue as string).length;

两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用**JSX**时，只有as语法断言是被允许的。

**类型别名**

    type myType = 0 | 1 | 2 | 3 | 4;
    let K:myType;
    let l:myType;

## **JSX** ##

什么是JSX：JSX = javascript xml就是**Javascript和XML结合的一种格式**。是 JavaScript 的语法扩展，**只要你把HTML代码写在JS里，那就是JSX。**

①.JSX **执行更快**，因为它在编译为 JavaScript 代码后进行了优化。

​
②.它是**类型安全**的，在编译过程中就能发现错误。

​
③.使用 JSX **编写模板更加简单快速**。

## 关于yarn命令 ##
**Yarn**是facebook发布的一款取代npm的包管理工具；

    yarn add react
	//代替npm来安装react
	//比较快

yarn命令可以自动安装项目中所有依赖的node模块的包

**#** 这样可以上传git的时候忽略掉依赖包，项目下载下来之后 使用 yarn命令安装项目中依赖的包

## WebRTC ##

**WebRTC**，即**Web Real-Time Communication**，web实时通信技术。简单地说就是在web浏览器里面引入实时通信，包括音视频通话等。

WebRTC实现了基于网页的语音对话或视频通话，目的是无插件实现web端的实时通信的能力。

WebRTC提供了视频会议的核心技术，包括音视频的采集、编解码、网络传输、展示等功能，并且还支持跨平台，包括linux、windows、mac、android等。

1. **WebRTC三角形**
![](./images/WebRTC_triangle.jpg)

2. **WebRTC梯形**

![](./images/WebRTC_trapezoid.jpg)

3.**WebRTC新功能特性**

![](./images/WebRTC_feature.jpg)

**RTC** 实时通信技术

## UDP与TCP ##

![](./images/tcp_udp.jpg)

## VPN实现原理 ##
在外网的用户可以使用 **vpn client** 连接组织搭建的**vpn server**以建立通信隧道，随后便建立了虚拟的私人网络，处于外网的 **worker** 和内网中的 **server** 可以相互通信。

那么我们可以简单理解 VPN，由 **VPN client 捕获用户发出的报文**，封装报文后通过**物理网络通信链路将报文**发给 VPN server，VPN server 接收到报文后进行**解包**，**再将其转发给实际的目标**，反之同理； VPN 在逻辑层面构建了虚拟网络

## 接口 ##

    interface IUser{
    name:string
    age?:number //?代表可选属性
    }
    const user:IUser = {
    name:"121",
    }
    
    //制度属性
    
    interface IUser1{
    readonly name1:string
    }
    
    const user1:IUser1 = {
    name1:"123"
    }
    
    // user1.name1 = 11; //报错 ，只能读取 不能更新

