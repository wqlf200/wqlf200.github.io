# FIONA's Cyberpunk Personal Website

一个赛博朋克风格的个人作品集网站，基于 React + Vite 构建，采用终端美学和荧光绿配色。

## 🎨 设计特色

- **赛博朋克主题**: 深色背景配荧光绿强调色
- **CRT 效果**: 复古显示器扫描线和闪烁动画
- **终端美学**: 命令行风格的交互界面
- **响应式设计**: 适配桌面端和移动端
- **流畅动画**: 悬停效果、发光效果和故障艺术

## 📁 项目结构

```
personal_web/
├── public/                      # 静态资源
├── src/
│   ├── assets/                 # 图片、字体等资源文件
│   ├── components/             # 可复用组件
│   │   ├── common/            # 通用组件 (Button, Card)
│   │   ├── layout/            # 布局组件 (Layout, Footer)
│   │   └── Header.jsx         # 导航头部
│   ├── pages/                 # 页面组件
│   │   ├── Home.jsx           # 首页 - 英雄区域
│   │   ├── About.jsx          # 关于 - 技能展示
│   │   ├── Projects.jsx       # 作品 - 项目网格
│   │   └── Contact.jsx        # 联系 - 联系表单
│   ├── styles/                # 全局样式
│   │   ├── index.css          # 全局基础样式和CRT效果
│   │   └── variables.css      # CSS 变量定义
│   ├── utils/                 # 工具函数
│   ├── App.jsx                # 根组件
│   └── main.jsx               # 应用入口
├── index.html                  # HTML 入口
├── package.json                # 项目配置
├── vite.config.js              # Vite 构建配置
└── README.md                   # 项目说明
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

## 🎯 功能页面

### 1. 首页 (Home)
- 英雄区域：大标题 "HI HERE IS Fiona"
- 系统状态指示器
- 联系按钮 CTA
- Bento Grid 展示核心能力
- 精选作品列表

### 2. 关于页面 (About)
- 个人背景介绍
- 设计哲学阐述
- 技能进度条展示
- 焦点领域网格

### 3. 作品页面 (Projects)
- 终端命令行风格标题
- 项目卡片网格布局
- Pinterest 作品集链接
- Woshipm 文章链接
- 项目状态和进度显示

### 4. 联系页面 (Contact)
- 扫描动画效果的头像占位符
- 联系方式列表 (微信、GitHub、邮箱)
- 信号传输表单
- 实时鼠标追踪效果

## 🎨 技术栈

- **前端框架**: React 18
- **构建工具**: Vite 5
- **路由**: React Router DOM 6
- **样式**: CSS3 (原生 CSS + CSS 变量)
- **字体**: 
  - Space Grotesk (标题)
  - JetBrains Mono (等宽字体/代码)
  - Geist (正文)
- **图标**: Material Symbols

## 🎭 设计主题

### 配色方案
- **主色**: 荧光绿 `#39ff14`
- **次要色**: 暗绿 `#2ae500`
- **背景色**: 纯黑 `#000000`
- **文字色**: 灰白 `#e2e2e2`
- **边框色**: 深绿 `#3c4b35`

### 动画效果
- CRT 扫描线动画
- 屏幕闪烁效果
- 霓虹发光效果
- 故障艺术效果
- 鼠标追踪高亮

## 📝 自定义配置

### 修改个人信息

在以下文件中更新您的个人信息：

1. **联系方式**: `src/pages/Contact.jsx`
2. **作品链接**: `src/pages/Projects.jsx`
3. **个人简介**: `src/pages/About.jsx`
4. **技能列表**: `src/pages/About.jsx`

### 修改配色

在 `src/styles/index.css` 中修改 CSS 变量：

```css
:root {
  --crt-green: #39ff14;      /* 主色 */
  --primary-dim: #2ae500;    /* 次要色 */
  --bg-color: #000000;       /* 背景色 */
  /* ... 其他颜色 */
}
```

## 🌟 特性亮点

- ✅ 赛博朋克视觉风格
- ✅ CRT 显示器效果
- ✅ 响应式设计
- ✅ 平滑页面过渡
- ✅ 交互式动画
- ✅ 终端美学
- ✅ 荧光发光效果
- ✅ 性能优化

## 📄 License

MIT License

## 👤 作者

**Fiona**

- GitHub: [@fiona](https://github.com)
- Email: wql200z@gmail.com
- WeChat: 1204833248

---

**SYSTEM_STATUS: OPTIMAL** | **UPTIME: 99.99%** | **LATENCY: <50MS**
