//类的修饰符
class Lee{
    //默认public
    public name:string;
    private _dna = 'asdasd'; //在类外面不能访问——实例也不能
    constructor(name:string){
        this.name = name;
    }
    output(){
        console.log(this._dna)
    }
}

let lee = new Lee("lxq");
lee.output();

//继承

class Parent{
    readonly firstName:string = "lee";
    protected _dna:string|undefined; //受保护的可以在子类继承,但是不能外部访问到
    private tag:string = "sada";
}

class Child extends Parent{
    say(){
        console.log(this._dna)
    }
}

let child = new Child();
console.log(child.firstName)
//只读不可以修改
// child.firstName = "asd";

//封装

class Person{
    private _name: string = "张三";
    get name():string{
        return this._name;
    }

    set name(val:string){
        this._name = val + '123';
    }
}

let person = new Person();

console.log(person.name) //输出张三

person.name = "李四";

console.log(person.name) //输出李四123

//静态方法 -- 

class Student{
    static classes:string = "三年10班" 
}
console.log(Student.classes)

//抽象类 -- 抽象类中的抽象方法都应该实现

abstract class Human{
    abstract say(): void; //函数 与返回值 不具体实现
    abstract eat(food:string): void;
    run():void{
        console.log("run fast");
    }
}

class Man extends Human{
    say(): void {
        console.log("balabala");
    }
    eat(food: string): void {
        console.log("eat a " + food)
    }
}

let man = new Man();

man.say();
man.eat("apple");
man.run();

//构造函数 -- 初始化的时候去做一些事情

class Women{
    private _food:string;
    constructor(food:string){
        this._food = food;
    }
}

let women = new Women("栗子");

console.log(women);