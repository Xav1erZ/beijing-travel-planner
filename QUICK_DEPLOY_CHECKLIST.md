# GitHub Pages 快速部署检查清单

## 📍 最终网址格式
```
https://你的用户名.github.io/beijing-travel-planner/
```

**示例**：
- 用户名：zhangsan-beijing → `https://zhangsan-beijing.github.io/beijing-travel-planner/`
- 用户名：lisi-2026 → `https://lisi-2026.github.io/beijing-travel-planner/`

## 🎯 逐步点击路线（核心步骤）

### 第1步：创建仓库
1. 登录 GitHub → **点击** 右上角 "+" 号
2. **选择** "New repository"
3. **填写**：
   - Repository name: `beijing-travel-planner`
   - Public: ✅ 勾选
   - README: ❌ 不勾选
4. **点击** "Create repository"

### 第2步：上传文件（PowerShell）
```powershell
cd "C:\Users\10403\CodeBuddy\20260402163929"
git init
git add .
git commit -m "首次提交"
git remote add origin https://github.com/你的用户名/beijing-travel-planner.git
git branch -M main
git push -u origin main
```

### 第3步：开启 Pages
1. 仓库页面 → **点击** "Settings" 选项卡
2. 左侧菜单 → **点击** "Pages"
3. **配置**：
   - Source: **选择** "Deploy from a branch"
   - Branch: **选择** "main"
   - Folder: **选择** "/ (root)"
4. **点击** "Save" 按钮

### 第4步：等待获取网址
- 等待 1-2 分钟
- 刷新页面
- 复制绿色提示中的网址

## ✅ 验证网站可访问

**应该看到**：
1. ✅ 蓝色标题："AI北京三日游策划公司"
2. ✅ 导航栏（首页、特色功能、行程推荐、AI规划、关于我们）
3. ✅ "AI智能规划" 按钮
4. ✅ 三天行程标签
5. ✅ 预算滑块（拖动时数字变化）
6. ✅ "生成AI行程计划" 按钮

**测试功能**：
1. **点击** 导航链接 → 页面平滑滚动
2. **点击** "第一天"/"第二天"/"第三天" → 内容切换
3. **拖动** 预算滑块 → 数字实时更新
4. **点击** "生成AI行程计划" → 显示个性化行程

## 🚨 故障排查速查表

### 问题：404 页面
**原因** | **解决方法**
---|---
仓库名错误 | 必须是 `beijing-travel-planner`
Pages未配置 | Settings → Pages → Branch: main, Folder: / (root)
文件未上传 | 重新执行 `git push`
等待时间不够 | 等待5-10分钟再试

### 问题：空白页面（无样式）
**原因** | **解决方法**
---|---
CSS路径错误 | 检查 `href="style.css"`（小写）
CSS文件缺失 | 确认 `style.css` 在仓库中
浏览器缓存 | 按 Ctrl + F5 强制刷新
CDN无法访问 | 检查网络，暂时注释第8-9行

### 问题：样式丢失（布局乱）
**原因** | **解决方法**
---|---
路径大小写错误 | `style.css` ≠ `Style.css`
外部资源失败 | 检查 Font Awesome 图标显示
CSS语法错误 | 检查控制台（F12）错误

### 问题：JS功能不工作
**原因** | **解决方法**
---|---
JS路径错误 | 检查 `src="script.js"`（小写）
JS文件缺失 | 确认 `script.js` 在仓库中
控制台错误 | 按 F12 → Console 查看红色错误
中文标点 | 确保使用英文标点

## 🔍 快速诊断命令

### 检查 Git 安装
```powershell
git --version
```
**预期**：显示版本号（如 `git version 2.45.0`）

### 检查仓库状态
```powershell
git status
```
**预期**：显示 "nothing to commit, working tree clean"

### 检查远程连接
```powershell
git remote -v
```
**预期**：显示你的 GitHub 仓库地址

### 检查提交历史
```powershell
git log --oneline
```
**预期**：显示至少1次提交记录

## 📁 必须存在的文件

### 仓库根目录必须有：
- [ ] `index.html` - 网站主页
- [ ] `style.css` - 样式文件  
- [ ] `script.js` - JavaScript文件

### 文件内容检查：
- `index.html` 第7行：`<link rel="stylesheet" href="style.css">`
- `index.html` 最后一行：`<script src="script.js"></script>`
- `style.css` 文件大小 > 1KB
- `script.js` 文件大小 > 1KB

## ⏱️ 时间线参考

| 时间 | 事件 |
|------|------|
| 0分钟 | 创建仓库完成 |
| 1分钟 | 上传文件完成 |
| 2分钟 | 配置 Pages 完成 |
| 3-5分钟 | 首次部署完成，显示网址 |
| 5-10分钟 | 网站完全可访问 |

**注意**：首次部署可能需要5-10分钟，之后更新只需1-2分钟。

## 📞 紧急求助

### 如果完全卡住：
1. **截图**错误信息
2. **检查**用户名、仓库名拼写
3. **尝试** `git push -f origin main`（强制推送）
4. **删除**仓库重新创建

### 验证文件是否上传：
1. 访问：`https://github.com/你的用户名/beijing-travel-planner`
2. **确认**能看到 `index.html`、`style.css`、`script.js` 文件
3. **点击** `index.html` → 查看内容是否完整

## 🎉 成功标志总结

### 视觉验证：
- 🔵 蓝色主题界面
- 📱 响应式布局（手机适配）
- 🎨 渐变效果和阴影
- 🔄 平滑动画过渡

### 功能验证：
- 🖱️ 所有按钮可点击
- 📊 滑块可拖动
- 📝 表单可输入
- 🔍 搜索功能正常

### 技术验证：
- 🚫 浏览器控制台无红色错误
- ⚡ 页面加载速度正常
- 📶 网络资源全部加载
- 🔒 HTTPS 安全连接

## 🏁 最终确认清单

### 部署完成：
- [ ] 创建了 `beijing-travel-planner` 仓库
- [ ] 上传了所有文件到 main 分支
- [ ] 开启了 GitHub Pages
- [ ] 获得了网址：`https://用户名.github.io/beijing-travel-planner/`

### 网站正常：
- [ ] 网址可打开
- [ ] 内容完整显示
- [ ] 所有功能正常工作
- [ ] 手机端适配良好

### 可提交给老师：
- [ ] 在线网址 ✅
- [ ] 功能演示 ✅  
- [ ] 技术说明 ✅
- [ ] 部署方法 ✅

**现在可以把这个在线网址提交给老师了！** 🚀