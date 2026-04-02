# GitHub Pages 部署详细指南

## 第一步：准备工作
✅ **你已经完成**：创建了所有项目文件
- `index.html` - 网站主页
- `style.css` - 样式文件
- `script.js` - JavaScript交互文件
- `README.md` - 项目说明

## 第二步：创建GitHub账号（如果还没有）
1. **打开浏览器**，访问：https://github.com
2. **点击右上角** "Sign up" 按钮
3. **填写信息**：
   - 用户名（如：yourusername）
   - 邮箱地址
   - 密码
4. **完成验证**：检查邮箱，点击验证链接
5. **登录** GitHub

## 第三步：创建新的GitHub仓库
1. **登录后**，点击右上角 "+" 号
2. **选择** "New repository"
3. **填写仓库信息**：
   ```
   Repository name: beijing-travel-planner
   Description: AI北京三日游策划公司网站 - 一人公司结课作品
   Public: ✅ 选择公开
   Initialize this repository with: ❌ 不要勾选任何选项
   ```
4. **点击** "Create repository"

## 第四步：安装Git（如果还没有）
### Windows系统：
1. 下载Git：https://git-scm.com/download/win
2. 运行安装程序，全部选择默认选项
3. 安装完成后，右键点击任意文件夹，应该能看到"Git Bash Here"

### 检查Git是否安装成功：
1. 打开 **PowerShell** 或 **命令提示符**
2. 输入命令：`git --version`
3. 如果显示版本号（如 `git version 2.45.0`），说明安装成功

## 第五步：上传文件到GitHub
### 方法一：使用Git命令（推荐）

#### 1. 打开PowerShell/命令提示符
- 按 `Win + R`，输入 `powershell`，回车
- 或按 `Win + X`，选择"Windows PowerShell"

#### 2. 导航到项目文件夹
```powershell
cd "C:\Users\10403\CodeBuddy\20260402163929"
```

#### 3. 初始化Git仓库
```powershell
git init
```

#### 4. 添加所有文件
```powershell
git add .
```

#### 5. 提交更改
```powershell
git commit -m "首次提交：AI北京三日游策划公司网站"
```

#### 6. 连接到GitHub远程仓库
```powershell
git remote add origin https://github.com/YOUR-USERNAME/beijing-travel-planner.git
```
**注意**：将 `YOUR-USERNAME` 替换为你的GitHub用户名

#### 7. 推送到GitHub
```powershell
git branch -M main
git push -u origin main
```

#### 8. 输入GitHub凭据
- 第一次推送会要求登录
- 输入你的GitHub用户名和密码（或Personal Access Token）

### 方法二：使用GitHub Desktop（图形界面）
1. 下载GitHub Desktop：https://desktop.github.com
2. 安装并登录
3. 点击"File" → "Add Local Repository"
4. 选择你的项目文件夹
5. 填写提交信息
6. 点击"Publish repository"
7. 输入仓库名称：`beijing-travel-planner`
8. 点击"Publish"

## 第六步：配置GitHub Pages
1. **回到GitHub网站**，打开你的仓库页面
2. **点击顶部** "Settings" 选项卡
3. **在左侧菜单中**找到 "Pages"
4. **在"Build and deployment"部分**：
   - Source: 选择 "Deploy from a branch"
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
5. **点击** "Save"
6. **等待约1-2分钟**，页面会刷新显示部署链接

## 第七步：访问你的网站
1. **复制**GitHub Pages提供的链接，格式为：
   ```
   https://YOUR-USERNAME.github.io/beijing-travel-planner/
   ```
2. **在浏览器中打开**这个链接
3. **测试所有功能**：
   - 导航栏点击
   - 行程标签切换
   - AI规划器生成行程
   - 响应式布局

## 第八步：分享你的网站
1. **复制链接**发送给老师或同学
2. **添加到结课作品报告**中
3. **截图**保存为作品展示

## 常见问题解决

### 问题1：git push失败，提示认证错误
**解决方案**：
1. 生成Personal Access Token：
   - 登录GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - 点击"Generate new token"
   - 选择"repo"权限
   - 复制生成的token
2. 使用token代替密码：
   ```powershell
   git push -u origin main
   # 用户名：你的GitHub用户名
   # 密码：粘贴刚才复制的token
   ```

### 问题2：GitHub Pages显示404
**解决方案**：
1. 确保仓库名正确：`beijing-travel-planner`
2. 确保 `index.html` 在根目录
3. 等待5-10分钟再刷新
4. 检查Settings → Pages配置是否正确

### 问题3：网站样式不显示
**解决方案**：
1. 检查浏览器控制台是否有错误（F12）
2. 确保CSS文件路径正确：`href="style.css"`
3. 清除浏览器缓存：Ctrl+F5

### 问题4：JavaScript功能不工作
**解决方案**：
1. 检查控制台错误（F12 → Console）
2. 确保JS文件路径正确：`src="script.js"`
3. 检查是否有拼写错误

## 更新网站内容
如果你需要修改网站：

### 1. 修改文件
在本地编辑 `index.html`、`style.css` 或 `script.js`

### 2. 提交更新
```powershell
cd "C:\Users\10403\CodeBuddy\20260402163929"
git add .
git commit -m "更新了行程内容"
git push
```

### 3. 等待部署
GitHub Pages会自动更新，通常需要1-2分钟

## 技术细节
- **网站类型**：静态网站
- **托管服务**：GitHub Pages（免费）
- **自定义域名**：可以绑定自己的域名（可选）
- **流量限制**：每月100GB流量，完全足够

## 成功标志
✅ 在浏览器中打开：`https://你的用户名.github.io/beijing-travel-planner/`
✅ 看到"AI北京三日游策划公司"标题
✅ 可以点击导航栏
✅ 可以切换行程标签
✅ AI规划器可以生成行程
✅ 在手机上也能正常显示

## 最后检查清单
- [ ] GitHub账号已创建并验证
- [ ] 仓库 `beijing-travel-planner` 已创建
- [ ] Git已安装并配置
- [ ] 所有文件已推送到GitHub
- [ ] GitHub Pages已配置
- [ ] 网站链接可以访问
- [ ] 所有功能正常工作

## 需要帮助？
如果遇到问题：
1. 截图保存错误信息
2. 检查拼写和路径
3. 等待几分钟再试
4. 搜索错误信息 + "GitHub Pages"
5. 参考GitHub官方文档：https://docs.github.com/pages

---

🎉 **恭喜！你的"AI北京三日游策划公司"网站已成功上线！** 🎉

现在你可以把这个链接分享给老师，作为你的结课作品展示。网站完全由你创建，使用纯HTML/CSS/JS，并通过GitHub Pages免费部署，展示了完整的技术实现能力。