# AI北京三日游策划公司 - 一人公司结课作品

![项目截图](https://img.shields.io/badge/状态-已完成-success)
![技术栈](https://img.shields.io/badge/技术-HTML/CSS/JS-blue)
![部署](https://img.shields.io/badge/部署-GitHub_Pages-green)

## 项目简介
这是一个"AI北京三日游策划公司"的网页Demo，作为一人公司的结课作品展示。网站使用纯HTML、CSS和JavaScript构建，无需复杂框架，支持一键部署到GitHub Pages。

## 功能特色
- 🎯 **AI智能规划**：根据用户兴趣、预算和旅行风格生成个性化北京三日游行程
- 📍 **经典行程推荐**：提供三种经典北京三日游方案
- 🗺️ **交互式行程查看**：点击标签切换查看不同天的详细安排
- 💰 **预算滑块**：可视化调整预算范围，实时更新AI建议
- 🎨 **响应式设计**：适配手机、平板和电脑各种屏幕尺寸
- ⚡ **平滑动画**：优雅的过渡效果和交互反馈

## 文件结构
```
beijing-travel-planner/
├── index.html          # 主页面HTML文件
├── style.css           # 样式文件
├── script.js           # JavaScript交互文件
└── README.md           # 项目说明文件
```

## 快速开始

### 1. 本地运行
1. 下载本项目所有文件
2. 双击打开 `index.html` 文件
3. 或在浏览器中打开 `file:///你的路径/index.html`

### 2. 在CodeBuddy中预览
1. 在CodeBuddy中打开项目文件夹
2. 右键点击 `index.html` 文件
3. 选择"在浏览器中打开"或使用预览功能

## GitHub Pages部署步骤

### 第一步：创建GitHub账号（如果还没有）
1. 访问 [GitHub官网](https://github.com)
2. 点击"Sign up"注册新账号
3. 完成邮箱验证

### 第二步：创建新的GitHub仓库
1. 登录GitHub后，点击右上角"+"号
2. 选择"New repository"
3. 填写仓库信息：
   - Repository name: `beijing-travel-planner`（或其他名称）
   - Description: "AI北京三日游策划公司网站"
   - 选择"Public"（公开）
   - **不要勾选** "Initialize this repository with a README"
4. 点击"Create repository"

### 第三步：上传文件到GitHub仓库
1. 在仓库页面，找到"…or create a new repository on the command line"部分
2. 按照指示，在本地打开命令行/终端
3. 依次执行以下命令：

```bash
# 1. 进入项目文件夹
cd "你的项目路径"

# 2. 初始化Git仓库
git init

# 3. 添加所有文件
git add .

# 4. 提交更改
git commit -m "首次提交：AI北京三日游策划公司网站"

# 5. 连接到GitHub远程仓库
git remote add origin https://github.com/你的用户名/beijing-travel-planner.git

# 6. 推送到GitHub
git branch -M main
git push -u origin main
```

### 第四步：配置GitHub Pages
1. 返回GitHub仓库页面
2. 点击顶部"Settings"选项卡
3. 在左侧菜单中找到"Pages"
4. 在"Source"部分：
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
5. 点击"Save"
6. 等待1-2分钟，页面会显示部署链接，如：`https://你的用户名.github.io/beijing-travel-planner/`

### 第五步：访问你的网站
1. 复制GitHub Pages提供的链接
2. 在浏览器中打开链接
3. 分享给你的朋友或老师！

## 网站功能使用指南

### 1. 导航栏
- 点击导航链接可平滑滚动到对应部分
- "开始规划"按钮直接跳转到AI规划器

### 2. 行程推荐
- 点击"第一天"、"第二天"、"第三天"标签查看不同行程
- 每个行程包含详细的时间安排和活动描述

### 3. AI规划器
1. **选择兴趣偏好**：点击标签选择您的兴趣
2. **调整预算**：拖动滑块设置预算范围
3. **选择旅行风格**：单选按钮选择行程紧凑程度
4. **生成计划**：点击"生成AI行程计划"按钮
5. **查看结果**：AI将根据您的偏好生成个性化行程

### 4. 响应式设计
- 在手机、平板、电脑上都能良好显示
- 导航栏在小屏幕上会自动折叠
- 所有交互元素都针对触摸屏优化

## 技术实现

### HTML结构
- 语义化HTML5标签
- 清晰的内容分区
- 无障碍访问支持

### CSS样式
- Flexbox和Grid布局
- 响应式设计媒体查询
- CSS变量和渐变效果
- 平滑过渡动画

### JavaScript功能
- DOM操作和事件处理
- 表单验证和数据处理
- 平滑滚动和交互动画
- 本地模拟AI算法

## 定制化修改

### 修改公司信息
编辑 `index.html` 文件：
- 第12行：修改页面标题
- 第25行：修改公司名称
- 第261-267行：修改关于我们的内容
- 第285-300行：修改页脚信息

### 修改行程内容
编辑 `index.html` 文件：
- 第118-190行：修改三天行程安排
- 每个行程包含时间、地点和描述

### 修改样式
编辑 `style.css` 文件：
- 第18-20行：修改主题颜色
- 第30-35行：修改导航栏样式
- 第100-110行：修改英雄区域样式

### 修改AI算法
编辑 `script.js` 文件：
- 第150-250行：`generatePersonalizedItinerary`函数
- 修改根据兴趣生成行程的逻辑

## 常见问题

### Q: 网站打不开怎么办？
A: 检查以下几点：
1. 确保所有文件都在同一文件夹
2. 检查浏览器控制台是否有错误
3. GitHub Pages部署后需要等待1-2分钟

### Q: 如何修改AI生成的行程？
A: 编辑 `script.js` 文件中的 `generatePersonalizedItinerary` 函数，修改不同兴趣对应的行程安排。

### Q: 网站如何在手机上显示？
A: 网站已做好响应式设计，在手机上会自动调整布局。如需进一步优化，可修改 `style.css` 中的媒体查询部分。

### Q: 如何添加更多景点？
A: 在 `index.html` 的行程部分添加新的 `schedule-item` 元素，格式参考现有结构。

## 许可证
本项目为结课作品，仅供学习参考。您可以自由使用、修改和分享。

## 联系信息
- 项目作者：一人公司 · 旅行规划师小明
- 项目类型：计算机科学结课作品
- 技术栈：HTML5, CSS3, JavaScript
- 部署方式：GitHub Pages

---

**祝您的北京之旅愉快！** 🎉