# Game VFX Portfolio

这是一个适合游戏特效设计方向应届生使用的静态个人作品集网站，可直接部署到 GitHub Pages。

## 页面结构

- `index.html`
  - 个人介绍
  - 作品集入口
  - 其他技术
  - 联系方式

- `project-fire.html`
  - 火焰技能项目详情
  - 设计稿 + 视频 + 设计解析

- `project-ice.html`
  - 冰霜技能项目详情

- `project-magic.html`
  - 魔法技能项目详情

## 推荐文件结构

```text
vfx_portfolio_site/
├─ index.html
├─ project-fire.html
├─ project-ice.html
├─ project-magic.html
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ main.js
│  ├─ images/
│  │  ├─ hero-cover.jpg
│  │  ├─ portfolio/
│  │  │  ├─ project-fire-cover.jpg
│  │  │  ├─ project-fire-design-01.jpg
│  │  │  ├─ project-fire-design-02.jpg
│  │  │  ├─ project-fire-video-poster.jpg
│  │  │  ├─ project-ice-cover.jpg
│  │  │  ├─ project-ice-design-01.jpg
│  │  │  ├─ project-ice-design-02.jpg
│  │  │  ├─ project-ice-video-poster.jpg
│  │  │  ├─ project-magic-cover.jpg
│  │  │  ├─ project-magic-design-01.jpg
│  │  │  ├─ project-magic-design-02.jpg
│  │  │  └─ project-magic-video-poster.jpg
│  │  └─ skills/
│  │     ├─ skill-shader-01.jpg
│  │     ├─ skill-dcc-01.jpg
│  │     └─ skill-texture-01.jpg
│  └─ videos/
│     ├─ project-fire-demo.mp4
│     ├─ project-ice-demo.mp4
│     └─ project-magic-demo.mp4
└─ README.md
```

## 文件命名建议

### 作品封面
`project-项目名-cover.jpg`

例：
- `project-fire-cover.jpg`
- `project-ice-cover.jpg`

### 设计稿
`project-项目名-design-序号.jpg`

例：
- `project-fire-design-01.jpg`
- `project-fire-design-02.jpg`

### 视频
`project-项目名-demo.mp4`

例：
- `project-fire-demo.mp4`

### 视频封面
`project-项目名-video-poster.jpg`

### 其他技术图片
`skill-技术名-序号.jpg`

例：
- `skill-shader-01.jpg`
- `skill-dcc-01.jpg`

## 页面跳转说明

### 首页导航
```html
<a href="#about">个人介绍</a>
<a href="#portfolio">作品集</a>
<a href="#skills">其他技术</a>
<a href="#contact">联系我</a>
```

### 首页跳到项目详情页
```html
<a href="project-fire.html">...</a>
```

### 项目页返回首页作品集位置
```html
<a href="index.html#portfolio">返回作品集</a>
```

### 项目之间跳转
```html
<a href="project-ice.html">下一个项目</a>
```

## 视频建议

为了 GitHub Pages 加载更稳定：

- 格式：MP4 / H.264
- 单个视频尽量控制在 30–80 MB 内
- 分辨率建议：1920×1080
- 帧率：30fps 或 60fps
- 如果视频很多、文件很大，建议上传到 Bilibili / YouTube / Vimeo，再在网页中嵌入，避免 GitHub 仓库过大。

## 图片建议

- 封面：1600×1200 或 1920×1440
- 设计稿：1920px 宽左右
- 技术图：1600px 宽左右
- JPG：质量 75–85
- 有透明背景时使用 PNG / WebP

## GitHub Pages 部署

1. 新建 GitHub 仓库，例如：
   `yourname.github.io`

2. 把本项目全部文件上传到仓库根目录。

3. 如果仓库名就是：
   `你的GitHub用户名.github.io`
   上传后即可通过：
   `https://你的GitHub用户名.github.io`
   访问。

4. 如果使用普通仓库：
   - GitHub 仓库 → Settings
   - Pages
   - Deploy from a branch
   - Branch 选择 `main`
   - Folder 选择 `/root`

## 你需要优先替换的内容

1. `YOURNAME`
2. 首页个人介绍
3. 邮箱 / GitHub 地址 / 微信或 QQ
4. 三个项目名称与简介
5. 所有占位图片
6. 三个 MP4 视频
7. 项目设计解析
8. 软件与技术栈

## 求职作品集内容建议

每个项目尽量按以下顺序：

1. 最终效果
2. 技能设计目标
3. 设计稿 / 参考 / 色稿
4. 最终视频
5. 特效拆分
6. 材质 / Shader
7. 粒子系统
8. Texture / Flipbook
9. 性能或优化说明
10. 复盘

招聘方通常会更关注“你为什么这么设计”和“你具体做了什么”，不只是最终画面。
