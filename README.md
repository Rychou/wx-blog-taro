# 目录结构
```
  +-- package.json 项目包配置文件
  +-- project.config.json 微信小程序项目配置文件，由于描述有关项目的信息
  +-- config webpack配置
  +-- dist 编译后的微信源码目录
  +-- src 源码目录
  |   +-- pages 页面目录
  |   |   +-- posts posts目录
  |   |   |   +-- show show目录
  |   |   |   +-- index.js posts页面文件
  |   |   |   +-- index.scss posts页面样式文件
  |   +-- app.js 入口文件，在此做全局配置
  |   +-- app.scss 入口样式文件
  |   +-- index.html 一般不需要配置
```

# 项目启动

## 1. 克隆项目到本地

```
  git clone git@github.com:Rychou/wx-blog-taro.git
```

## 2. 安装包依赖

```
  npm install
```

## 3. 在命令行启动

```
  npm build:weapp --watch
```

## 4. 在微信开发者工具预览

- 打开微信开发者工具
- 点击 + 之后选择导入项目
- 目录选择项目目录下的`/dist`目录

> 若没有AppId, 可以选择测试号。

# 参考

> - [本程序的WXML版本](https://github.com/openxy/wx-blog)
> - [小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/)
>  - [Taro官方文档](https://nervjs.github.io/taro/docs/README.html)
> - [React官方文档](https://zh-hans.reactjs.org/)