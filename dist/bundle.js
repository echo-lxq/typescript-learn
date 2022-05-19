(function () {
    'use strict';

    //元组 标识长度是固定的，内容跟类型也规定好
    let tuple = ['string', 18, true];
    //无法通过索引给元组添加不存在的属性
    //tuple[3]=100
    //如果通过数组方法新增，必须元组中得支持此类型
    tuple.push('zf');
    let r = tuple.pop(); //pop()拿掉最后一项 赋值之后r值就为最后一项
    console.log(r);
    //枚举类型 -- 一类类型放到一起 枚举中的默认值从0开始 只有数字才可以自行进行推算
    //应用 -- 状态码、权限、类型...
    var USER_ROLE;
    (function (USER_ROLE) {
        USER_ROLE["USER"] = "abc";
        USER_ROLE[USER_ROLE["ADMIN"] = 0] = "ADMIN";
        USER_ROLE[USER_ROLE["MANAGER"] = 1] = "MANAGER";
    })(USER_ROLE || (USER_ROLE = {}));
    //如果枚举中的值是数字，那么可以反举 
    //USER_ROLE[2]可以 & USER_ROLE['abc']不行
    //异构枚举，枚举中存放了不同类型 
    //ts枚举编译出来的结果是个对象
    console.log(USER_ROLE.ADMIN); //输出1
    //never类型 永远达不到的类型,never是任何类型的子类型
    //1) 报错  2)死循环 3)判断的时候永远进不到某个判断
    function myError() {
        throw new Error();
    }
    myError();

})();
