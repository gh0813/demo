# Vue 3 + TypeScript + Vite

一个模板项目，直接下下来就可以跑，避免配置这么多乱七八糟的东西

## 特性

- 各种linter，prettier、eslint、stylelint的各种功能插件开箱即用
- 使用[lint-staged](https://www.npmjs.com/package/lint-staged)实现git提交前检查暂存区代码
- 使用[unocss](https://github.com/unocss/unocss)来写简短的原子化css
- 引入[vueuse](https://vueuse.org/)、[element-plus](https://element-plus.gitee.io/zh-CN/)

## 下载

- 下载下来git init绑定远端git
- git clone项目，然后修改remote为远端git项目

## 跑起来?

开发
```bash
pnpm dev # or yarn dev or npm dev
```

打包
```bash
pnpm build # or yarn build or npm dev
```

### 自动导入组件
项目内可以不导入声明组件就可以使用该组件(当然声明了更好，本意是拿来方便做element-plus的按需使用的)

### unocss

可以直接在html代码中书写类css代码，程序会在编译阶段汇总所有的这种代码将其编译为css注入到主程序中

```html
<div class="mt-20px text-red">将对该元素应用margin-top: 20px;color: red;样式</div>
```

### icons使用

项目的icon使用了自动导入，使用了[iconify](https://iconify.design/)上面的[element-plus的集合](https://icon-sets.iconify.design/ep/)。

想要使用element-plus中的图标
```html
<div class="i-ep:aim" />
```

默认的图标渲染是按照背景图片进行渲染，如果需要控制其样式(典型的比如颜色)那么可以使用mask模式

```html
  <div class="i-ep:aim?mask text-yellow-300" />
```

项目中还可以使用[material-symbols](https://icon-sets.iconify.design/material-symbols/?category=General)的图标(有1w+!)
```html
  <div class="i-ms:shield-person" />
```

更多icons参考[https://icones.js.org/collection/ep](icones)或者[https://icon-sets.iconify.design/](iconify)

## 包管理器
建议使用[pnpm](https://pnpm.io/zh/)作为包管理工具

## 代码风格校验

在保存代码时，可以自动应用eslint、prettier、stylelint的自动修复程序。也可以完全不修改，等到Git提交代码时让lint-stage进行代码修复。

### JetBrains

去[Tools] - [Actions on Save]中勾选"Run eslint --fix"、"Run Prettier"

去[Tools] - [File Watchers]设置SCSS和VUE文件变动应用Stylelint --fix

![图片](http://git.xway.cn/zzx/vue3-ts-template/raw/master/file-watch.png)

SCSS文件只需要再创建一个，把File Type改为SCSS即可

### Vs code

暂无
