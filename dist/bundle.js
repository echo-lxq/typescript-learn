(function () {
    'use strict';

    //类的修饰符
    class Lee {
        constructor(name) {
            this._dna = 'asdasd'; //在类外面不能访问——实例也不能
            this.name = name;
        }
        output() {
            console.log(this._dna);
        }
    }
    let lee = new Lee("lxq");
    lee.output();
    //继承
    class Parent {
        constructor() {
            this.firstName = "lee";
            this.tag = "sada";
        }
    }
    class Child extends Parent {
        say() {
            console.log(this._dna);
        }
    }
    let child = new Child();
    console.log(child.firstName);
    //只读不可以修改
    // child.firstName = "asd";
    //封装
    class Person {
        constructor() {
            this._name = "张三";
        }
        get name() {
            return this._name;
        }
        set name(val) {
            this._name = val + '123';
        }
    }
    let person = new Person();
    console.log(person.name); //输出张三
    person.name = "李四";
    console.log(person.name); //输出李四123
    //静态方法 -- 
    class Student {
    }
    Student.classes = "三年10班";
    console.log(Student.classes);
    //抽象类 -- 抽象类中的抽象方法都应该实现
    class Human {
        run() {
            console.log("run fast");
        }
    }
    class Man extends Human {
        say() {
            console.log("balabala");
        }
        eat(food) {
            console.log("eat a " + food);
        }
    }
    let man = new Man();
    man.say();
    man.eat("apple");
    man.run();
    //构造函数 -- 初始化的时候去做一些事情
    class Women {
        constructor(food) {
            this._food = food;
        }
    }
    let women = new Women("栗子");
    console.log(women);

})();
