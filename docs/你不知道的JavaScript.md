# 第一部分  作用域和闭包

## 第一章 作用域是什么
1.1 编译原理
1.2 理解作用域
1.3 作用域嵌套
1.4 异常
1.5 小结

## 第二章 词法作用预
2.1 词法阶段
2.2 欺骗词法
    eval
    with
    性能
2.3 小结

## 第三章 函数作用域和块作用域
3.1 函数中作用域
3.2 隐藏内部实现
3.3 函数作用域
    匿名和具名
    立即执行函数表达式
3.4 块作用域
    with
    try/catch
    let
    const
3.5 小结

## 第四章 提升
4.1 先有鸡还是先有蛋
4.2 编译器再度来袭
4.3 函数优先
4.4 小结

## 第五章 作用域闭包
5.1 启示
5.2 实质问题
5.3 现在我懂了
5.4 循环和闭包
5.5 模块
    现代的模块机制
    未来的模块机制
5.6 小结

附录 A 动态作用域
附录 B 块作用域的替代方案
附录 C this词法
附录 D 致谢


# 第二部分 this和对象原型

## 第一章 关于this
1.1 为什么要用this
1.2 误解
    指向自身
    它的作用域
1.3 this到底是什么
1.4 小结

## 第二章 this全面解析
2.1 调用位置
2.2 绑定规则
    默认绑定
    隐式绑定
    显示绑定
    new绑定
2.3 优先级
2.4 绑定例外
    被忽略的this
    间接引用
    软绑定
2.5 this词法
2.6 小结

## 第三章 对象
3.1 语法
3.2 类型
3.3 内容
    可计算属性名
    属性与方法
    赋值对象
    属性描述符
    不变形
    [[Get]]
    [[Put]]
    Getter和Setter
    存在性
3.4 遍历
3.5 小结

## 第四章 混合对象"类"
4.1 类理论
    类的设计模式
    JS中的类
4.2 类的机制
    建造
    构造函数
4.3 类的继承
    多态
    多重继承
4.4 混入
    显示混入
    隐式混入
4.5 小结

## 第五章 原型
5.1 [[Prototype]]
    Object.prototype
    属性设置和屏蔽
5.2 类
    类函数
    构造函数
    技术
5.3 （原型）继承
5.4 对象关联
    创建关联
    关联是备用
5.5 小结

## 第六章 行为委托
6.1 面向委托的设置
    类理论
    委托理论
    比较思维模型
6.2 类与对象
    控件“类”
    委托控件对象
6.3 更简洁的设计
6.4 更好的语法
6.5 内省
6.6 小结

附录 A ES6中的Class


# 第三部分 类型和语法

## 第一章 类型
1.1 类型
1.2 内置类型
1.3 值和类型
        undefined和undeclared
        tepyof Undeclared
1.4 小结

## 第二章 值
2.1 数值
2.2 字符串
2.3 数字
	    数字的语法
	    较小的数值
	    整数的安全范围
	    整数检测
	    32位有符号整数
2.4 特殊数值
        不是值的值
        undefined
        特殊的数字
        特殊等式
2.5 值和引用
2.6 小结

## 第三章 原生函数
3.1 内置属性[[Class]]
3.2 封装对象包装
3.3 拆封
3.4 原生函数作为构造函数
        Array(..)
        Object(..)、Function(..)、RegExp(..)
        Date(..)、Error(..)
        Symbol(..)
        原生原型
3.5 小结

## 第四章 强制类型转换
4.1 值类型转换
4.2 抽象值操作
      	ToString
      	ToNumber
      	ToBoolean
4.3 显示强制类型转换
        字符串和数字之间的显示转换
        显示解析数字字符串
        显示转换为布尔值
4.4 隐式强制类型转换
        隐式的简化
        字符串和数字之间的隐式强制类型转换
        布尔值到数字的隐式强制类型转换
        隐式强制类型转换为布尔值
        || 和 &&
        符号的强制类型转换
4.5 宽松相等和严格相等
        相等比较操作的性能
        抽象相等
        比较少见的情况
4.6 抽象关系比较
      小结

## 第五章 语法
5.1 语句和表达式
        语句的结果值
        表达式的副作用
        上下文规则
5.2 运算符优先级
        短路
        更强的绑定
        关联
        释疑
5.3 自动分号
5.4 错误
5.5 函数参数
5.6 try..finally
5.7 switch
5.8 小结

附录 A 混合环境JavaScript

# 第四部分 异步和性能

## 第一章 异步：现在与未来
1.1 分块的程序
1.2 时间循环
1.3 并行线程
1.4 并发
     非交互
     交互
     协作
1.5 任务
1.6 语句顺序
1.7 小结

## 第二章 回调
2.1 continuation
2.2 顺序的大脑
     执行与计划
     嵌套回调与链式回调
2.3 信任问题
     五个回调的故事
     不只是别人的代码
2.4 省点回调
2.5 小结

## 第三章 Promise
3.1 什么是Promise
     未来值
     完成事件
3.2 具有then方法的鸭子类型
3.3 Promise信任问题
     调用过早
     调用过晚
     回调未调用
     调用次数过少或过多
     未能传递参数/环境值
     吞掉错误或异常
     是可信任的Promise吗
     建立信任
3.4 链式流
3.5 错误处理
     绝望的陷阱
     处理未捕获的情况
     成功的坑
3.6 Promise模式
     Promise.all([ .. ])
     Promise.race([ .. ])
     all([ .. ]) 和 race([ .. ]) 的变体
     并发迭代
3.7 Promise API 概述
		 new Promise(..) 构造器
		 Promise.resolve(..) 和 Promise.reject(..)
		 then(..) 和 catch(..)
		 Promise.all([ .. ]) 和 Promise.race([ .. ])
3.8 Promise 局限性
		 顺序错误处理
		 单一值
		 单决议
		 惯性
		 无法取消的Promise
		 Promise邢恩给你
3.9　小结

## 第四章 生成器
4.1 打破完整运行
     输入和输出
     多个迭代器
4.2 生成器产生值
     生产者和迭代器
     iterable
     生成器迭代器
4.3 异步迭代生成器
4.4 生成器 + Promise
		 支持Promise的Generator Runner
		 生成器中的Promise并发
4.5 生成器委托
		 为什么用委托
		 消息委托
		 异步委托
		 递归委托
4.6 生成器委托
4.7 形实转换程序
4.8 ES6之前的生成器
     手工转换
     自动转换
4.9 小结

## 第五章 程序性能
5.1 Web Worker
		 Worker环境
		 数据传递
		 共享Worker
		 模拟Web Worker
5.2 SIMD
5.3 asm.js
		 如何使用asm.js使用
		 asm.js模块
5.4 小结

## 第六章 性能测试与调优
6.1 性能测试
		 重复
		 Benchmark.js
6.2 环境为王
6.3 jsPerf.com
6.4 写好测试 
6.5 微性能
		 不是所有的引擎都类似
		 大局
6.6 尾调用优化
6.7 小结

附录 A asynquence库
附录 B 高级异步模式

# 第五部分 起步上路

## 第一章 深入编程
1.1　代码 
1.2　表达式
1.3　实践 
		 输出
     输入
1.4　运算符
1.5　值与类型
1.6　代码注释
1.7　变量
1.8　块
1.9　条件判断
1.10 循环
1.11 函数
1.12 实践
1.13 小结

## 第二章 深入 JavaScript
2.1　值与类型
		 对象
		 内置类型方法
		 值的比较
2.2　变量
2.3　条件判断
2.4　严格模式
2.5　作为值的函数
		 立即调用函数表达式
		 闭包
2.6　this 标识符
2.7　原型
2.8　旧与新
		 polyﬁlling transpiling
2.9　非 JavaScript
2.10 小结

## 第三章 深入 “ 你不知道的 JavaScript”系列
3.1 作用域和闭包
3.2 this 和对象原型
3.3 类型和语法
3.4 异步和性能
3.5 ES6 及更新版本 
3.6 小结

# 第六部分　ES6 及更新版本

## 第一章 ES? 现在与未来 
1.1 版本
1.2 transpiling
1.3 小结

## 第二章 语法
2.1　块作用域声明
		 let 声明
		 const 声明
		 块作用域函数
2.2 spread/rest
2.3 默认参数值
2.4 解构 
		 对象属性赋值模式
		 不只是声明
		 重复赋值
2.5 太多， 太少，刚刚好
		 默认值赋值
		 嵌套解构
		 解构参数

2.6　对象字面量扩展 ... 90
		 简洁属性
		 简洁方法
		 计算属性名
		 设定 [[Prototype]]
		 super对象
2.7　模板字面量 
		 插入表达式
		 标签模板字面量 
2.8　箭头函数
2.9　for..of 循环
2.10 正则表达式
		 Unicode 标识
		 定点标识
		 正则表达式 flags 
2.11 数字字面量扩展
2.12 Unicode
		 支持 Unicode 的字符串运算 
		 字符定位 
		 Unicode 标识符名
2.13 符号
		 符号注册
		 作为对象属性的符号
2.14 小结

## 第三章 代码组织
3.1 迭代器
		 接口
		 next() 迭代
		 可选的 return(..) 和 throw(..) 
		 迭代器循环 
		 自定义迭代器
		 迭代器消耗 
3.2 生成器
	 	 语法
	 	 迭代器控制
	 	 提前完成
	 	 错误处理
	 	 Transpile生成器
	 	 生成器使用 

3.3 模块 
		 旧方法
		 前进
		 新方法
		 模块依赖环
		 模块加载 
3.4 类
		 class
		 extends 和 super  
		 new.target 
		 static 
3.5　小结 

## 第四章 异步流控制
4.1 Promise
		 构造和使用 Promise 
		 Thenable 
		 Promise API
4.2 生成器 + Promise 
4.3 小结 

## 第五章 集合
5.1 TypedArray
		 大小端（Endianness）
		 多视图
		 带类数组构造器 
5.2 Map
		 Map值 
		 Map键
5.3 WeakMap
5.4 Set 
5.5 WeakSet
5.6 小结 

## 第六章 新增 API
6.1 Array .
		 静态函数 Array.of(..)  
		 静态函数 Array.from(..)  　
		 创建数组和子类型  
		 原型方法 copyWithin(..)  
		 原型方法 fill(..) 
		 原型方法 find(..)  
		 原型方法 findIndex(..)   
		 原型方法 entries() 、 values() 、 keys()
6.2 Object 
		 静态函数 Object.is(..) 
		 静态函数 Object.getOwnPropertySymbols(..)
		 静态函数 Object.setPrototypeOf(..) 
		 静态函数 Object.assign(..) 
6.3 Math 
6.4 Number
		 静态属性  
		 静态函数 Number.isNaN(..)  
		 静态函数 Number.isFinite(..)  　
		 整型相关静态函数
6.5 字符串 
		 Unicode 函数  　
		 静态函数 String.raw(..)  
		 原型函数 repeat(..)  
		 字符串检查函数 
6.6 小结 

## 第七章 元编程
7.1 函数名称
7.2 元属性
7.3 公开符号
		 Symbol.iterator  
		 Symbol.toStringTag 与 Symbol.hasInstance    
		 Symbol.species   
		 Symbol.toPrimitive   
		 正则表达式符号    
		 Symbol.isConcatSpreadable
		 Symbol.unscopables
7.4 代理 
		 代理局限性  
		 可取消代理  
		 使用代理 
7.5 Reflect API
7.6 特性测试
7.7 尾递归调用（Tail Call Optimization,TCO）
		 尾调用重写
		 非 TCO 优化
		 元在何处 
7.8 小结 

## 第八章 ES6 之后
8.1 异步函数
8.2 Object.observe(..) 
		 自定义改变事件 
		 结束观测 
8.3 幂运算符
8.4 对象属性与
8.5 Array#includes(..) 
8.6 SIMD 
8.7 WebAssembly (WASM)
8.8 小结




























