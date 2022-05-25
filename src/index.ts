let  c = false;
c = true;

function f():number{
    return 1;
}

//加上？ 标识有没有都可以
let b:{name: string ,age?:number};
b = {name:"123"};
b.name = "456";
console.log(b.name)
console.log(b)

//类型别名 

type myType = 0 | 1 | 2 | 3 | 4;
let K:myType;
let l:myType;

let arr:(string|number)[];
arr=["123",'123'];