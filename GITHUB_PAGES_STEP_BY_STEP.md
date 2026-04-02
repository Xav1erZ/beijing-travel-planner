# GitHub Pages 部署 - 超详细逐步点击路线

## 📋 部署前准备
**你已经有的文件**：
- `index.html` - 网站主页 ✅
- `style.css` - 样式文件 ✅  
- `script.js` - 交互文件 ✅
- `README.md` - 项目说明 ✅
- `DEPLOY_GUIDE.md` - 详细指南 ✅

## 🚀 第一步：创建 GitHub 账号（如果还没有）

### 1.1 访问 GitHub
**网址**：https://github.com

### 1.2 注册账号
1. **点击** 右上角 "Sign up" 按钮
2. **填写**：
   - Email address（邮箱）
   - Password（密码）
   - Username（用户名，如：zhangsan-beijing）
3. **点击** "Verify you're human" 完成验证
4. **点击** "Create account"
5. **检查邮箱**，点击验证链接

**重要**：记住你的用户名，后面会用到！

## 🗂️ 第二步：创建 GitHub 仓库

### 2.1 登录后创建新仓库
1. **点击** 右上角 "+" 号（加号图标）
2. **选择** "New repository"

### 2.2 填写仓库信息
```
Repository name: beijing-travel-planner
Description: AI北京三日游策划公司网站 - 一人公司结课作品
Public: ✅ 选择公开（必须选这个）
Initialize this repository with: ❌ 不要勾选任何选项
```
3. **点击** "Create repository"（绿色按钮）

## 💻 第三步：安装 Git（如果还没有）

### 3.1 下载 Git
**网址**：https://git-scm.com/download/win

### 3.2 安装步骤
1. **双击** 下载的安装文件
2. **一直点击** "Next"（全部用默认选项）
3. **安装完成**后，重启电脑

### 3.3 验证安装
1. 按 `Win + R`，输入 `cmd`，回车
2. 输入命令：`git --version`
3. 如果显示版本号（如 `git version 2.45.0`），说明成功

## 📤 第四步：上传文件到 GitHub

### 4.1 打开 PowerShell（Windows）
1. 按 `Win + X`
2. **选择** "Windows PowerShell"
3. 或按 `Win + R`，输入 `powershell`，回车

### 4.2 导航到项目文件夹
在 PowerShell 中输入：
```powershell
cd "C:\Users\10403\CodeBuddy\20260402163929"
```

### 4.3 执行 Git 命令（一行一行执行）
```powershell
# 1. 初始化 Git 仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交更改
git commit -m "首次提交：AI北京三日游策划公司网站"

# 4. 连接到 GitHub 仓库（注意替换 YOUR-USERNAME）
git remote add origin https://github.com/YOUR-USERNAME/beijing-travel-planner.git

# 5. 推送到 GitHub
git branch -M main
git push -u origin main
```

**重要**：将 `YOUR-USERNAME` 替换为你的 GitHub 用户名！

### 4.4 输入 GitHub 凭据
第一次推送时会要求登录：
- **Username**：输入你的 GitHub 用户名
- **Password**：输入你的 GitHub 密码（或 Personal Access Token）

**如果密码错误**：
1. 访问：https://github.com/settings/tokens
2. **点击** "Generate new token" → "Generate new token (classic)"
3. **勾选** "repo" 权限
4. **点击** "Generate token"
5. **复制** 生成的 token（一串字母数字）
6. 用这个 token 代替密码

## 🌐 第五步：开启 GitHub Pages

### 5.1 回到 GitHub 网站
1. 访问：https://github.com/YOUR-USERNAME/beijing-travel-planner
   （替换 YOUR-USERNAME 为你的用户名）

### 5.2 进入设置页面
1. **点击** 顶部菜单的 "Settings" 选项卡
   （在 "Code"、"Issues"、"Pull requests" 旁边）

### 5.3 找到 Pages 设置
1. 在左侧菜单中，**向下滚动**找到 "Pages"
2. **点击** "Pages"

### 5.4 配置 Pages
```
Build and deployment
  Source: Deploy from a branch
  Branch: main
  Folder: / (root)
```

**具体操作**：
1. 在 "Source" 下拉菜单中，**选择** "Deploy from a branch"
2. 在 "Branch" 下拉菜单中，**选择** "main"
3. 在 "Folder" 下拉菜单中，**选择** "/ (root)"
4. **点击** "Save" 按钮（蓝色）

## 🔍 第六步：等待并获取网址

### 6.1 等待部署
1. **等待约 1-2 分钟**
2. **刷新**页面（按 F5）
3. 你会看到绿色提示："Your site is live at..."

### 6.2 最终网址格式
```
https://YOUR-USERNAME.github.io/beijing-travel-planner/
```

**示例**：
如果你的用户名是 `zhangsan-beijing`，网址就是：
```
https://zhangsan-beijing.github.io/beijing-travel-planner/
```

## ✅ 第七步：验证网站可访问

### 7.1 打开网站
1. **复制** 你的网址
2. **打开** 新的浏览器标签页
3. **粘贴** 网址，回车

### 7.2 检查内容
应该看到：
- ✅ "AI北京三日游策划公司" 标题
- ✅ 蓝色导航栏
- ✅ 图片占位符
- ✅ 功能卡片
- ✅ 行程标签
- ✅ AI规划器

### 7.3 测试功能
1. **点击** 导航栏链接（应该平滑滚动）
2. **点击** "第一天"、"第二天"、"第三天" 标签（应该切换内容）
3. **拖动** 预算滑块（数字应该变化）
4. **点击** "生成AI行程计划"（应该显示个性化行程）

## 🚨 第八步：故障排查指南

### 问题1：打开是 404 页面

**原因**：
1. 仓库名称错误
2. Pages 未正确配置
3. 文件未推送到 main 分支
4. 等待时间不够

**解决步骤**：
1. **检查仓库名称**：必须是 `beijing-travel-planner`
2. **检查 Pages 配置**：
   - Settings → Pages → Branch: main, Folder: / (root)
3. **检查文件**：
   - 仓库中应该有 `index.html` 文件
4. **等待更久**：有时需要 5-10 分钟
5. **重新保存配置**：
   - Settings → Pages → 点击 Save 按钮

### 问题2：页面空白（只有文字，没样式）

**原因**：
1. CSS 文件路径错误
2. CSS 文件未上传
3. 浏览器缓存

**解决步骤**：
1. **检查控制台**（按 F12 → Console）：
   - 查看是否有 "404" 错误
   - 查看哪个文件加载失败
2. **检查文件**：
   - 确保 `style.css` 在仓库中
   - 确保 `index.html` 第7行是：`<link rel="stylesheet" href="style.css">`
3. **清除缓存**：
   - 按 Ctrl + F5 强制刷新
   - 或按 F12 → Network → 勾选 "Disable cache"
4. **检查网络**：
   - 确保能访问 CDN（fonts.googleapis.com, cdnjs.cloudflare.com）

### 问题3：样式丢失（布局混乱）

**原因**：
1. CSS 文件路径大小写错误
2. 外部资源加载失败
3. CSS 语法错误

**解决步骤**：
1. **检查路径大小写**：
   - GitHub 区分大小写
   - `Style.css` ≠ `style.css`
2. **检查外部资源**：
   - Font Awesome 图标是否显示
   - 字体是否加载
3. **简化测试**：
   - 暂时注释掉外部 CSS（第8-9行）
   - 看是否恢复正常

### 问题4：JavaScript 不工作

**原因**：
1. JS 文件路径错误
2. JS 语法错误
3. 控制台错误

**解决步骤**：
1. **检查控制台**（F12 → Console）：
   - 查看红色错误信息
2. **检查文件**：
   - 确保 `script.js` 在仓库中
   - 确保 `index.html` 最后一行是：`<script src="script.js"></script>`
3. **检查语法**：
   - 确保没有中文标点
   - 确保括号配对

### 问题5：图片不显示

**原因**：
1. 使用的是 Font Awesome 图标
2. 网络问题

**解决步骤**：
1. **检查网络**：能否访问 https://cdnjs.cloudflare.com
2. **替换为文本**：暂时用文字代替图标测试

## 📝 第九步：最终检查清单

### 部署前检查
- [ ] GitHub 账号已注册并验证邮箱
- [ ] 仓库名称：`beijing-travel-planner`
- [ ] 仓库设置为 Public（公开）
- [ ] Git 已安装（`git --version` 有输出）
- [ ] 所有文件在 `C:\Users\10403\CodeBuddy\20260402163929` 文件夹中

### 上传检查
- [ ] 执行了 `git init`
- [ ] 执行了 `git add .`
- [ ] 执行了 `git commit -m "消息"`
- [ ] 执行了 `git remote add origin https://github.com/用户名/beijing-travel-planner.git`
- [ ] 执行了 `git push -u origin main`
- [ ] 没有错误信息

### Pages 配置检查
- [ ] 访问了 Settings → Pages
- [ ] Source: Deploy from a branch
- [ ] Branch: main
- [ ] Folder: / (root)
- [ ] 点击了 Save 按钮
- [ ] 看到了绿色部署成功提示

### 网站访问检查
- [ ] 网址格式：`https://用户名.github.io/beijing-travel-planner/`
- [ ] 打开了网站
- [ ] 看到了标题和导航栏
- [ ] 可以点击标签切换
- [ ] AI规划器可以生成行程

## 🔧 第十步：常用命令参考

### 重新上传文件（如果修改了）
```powershell
cd "C:\Users\10403\CodeBuddy\20260402163929"
git add .
git commit -m "更新了网站内容"
git push
```

### 检查仓库状态
```powershell
git status
```

### 查看提交历史
```powershell
git log --oneline
```

### 强制推送到 GitHub（慎用）
```powershell
git push -f origin main
```

## 📞 快速求助

### 如果卡在某个步骤：
1. **截图**保存错误信息
2. **检查**拼写和大小写
3. **等待**几分钟再试
4. **搜索**错误信息 + "GitHub Pages"

### 重要链接：
- GitHub 主页：https://github.com
- GitHub Pages 文档：https://docs.github.com/pages
- Git 下载：https://git-scm.com/download/win

## 🎉 恭喜！部署成功标志

✅ **网址可访问**：在浏览器中打开你的网址
✅ **内容完整**：看到"AI北京三日游策划公司"标题
✅ **功能正常**：可以点击、切换、生成行程
✅ **响应式**：在手机上也能正常显示
✅ **无错误**：浏览器控制台（F12）没有红色错误

**你的网站现在已上线，可以分享给老师了！**

网址：`https://你的用户名.github.io/beijing-travel-planner/`

**示例提交给老师**：
> 老师您好，这是我的结课作品"AI北京三日游策划公司"网站。
> 
> **技术栈**：纯 HTML/CSS/JavaScript，无框架依赖
> **部署方式**：GitHub Pages 免费托管
> **在线地址**：https://zhangsan-beijing.github.io/beijing-travel-planner/
> 
> **功能亮点**：
> 1. AI智能行程规划（根据兴趣、预算、风格生成）
> 2. 响应式设计（手机、平板、电脑适配）
> 3. 交互式用户体验（点击切换、拖动滑块）
> 4. 现代UI设计（平滑动画、渐变效果）

祝你的结课作品获得好成绩！ 🚀