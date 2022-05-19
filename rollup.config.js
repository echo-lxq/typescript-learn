import ts from 'rollup-plugin-typescript2'; //解析ts语法的插件
import {nodeResolve} from '@rollup/plugin-node-resolve' //解析第三方模块 {}--多个变量接收
import serve from 'rollup-plugin-serve';
import path from 'path';

//导出配置对象
export default{
    //入口
    input:'./src/index.ts',
    output:{
        file: path.resolve(__dirname,'dist/bundle.js'),
        sourecemap:true,
        format:'iife', //生成一个自执行函数
    },
    plugins:[
        nodeResolve({ //默认找.js文件
            extensions:['.js','.ts']
        }),
        ts({
            tsconfig:path.resolve(__dirname,'tsconfig.json')
        }),
        serve({
            openPage:'/public/index.html', //默认打开路径
            contentBase:'', //当前目录作为静态文件
            port:3000 //服务器端口号
        })
    ]
}