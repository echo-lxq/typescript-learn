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