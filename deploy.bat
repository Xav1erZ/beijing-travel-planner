@echo off
echo ========================================
echo AI北京三日游策划公司 - GitHub部署助手
echo ========================================
echo.

echo 第一步：检查Git是否安装
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git未安装，请先安装Git
    echo 下载地址：https://git-scm.com/download/win
    pause
    exit /b 1
)
echo ✅ Git已安装
echo.

echo 第二步：初始化Git仓库
git init
echo.

echo 第三步：添加所有文件
git add .
echo.

echo 第四步：提交更改
git commit -m "首次提交：AI北京三日游策划公司网站"
echo.

echo ========================================
echo 接下来需要手动操作：
echo.
echo 1. 访问 https://github.com 登录账号
echo 2. 点击右上角"+"号 → "New repository"
echo 3. 创建仓库：beijing-travel-planner
echo 4. 复制仓库链接（如：https://github.com/用户名/beijing-travel-planner.git）
echo.
echo 完成后，请将仓库链接粘贴到下面：
echo ========================================
echo.

set /p REPO_URL=请输入GitHub仓库链接: 
if "%REPO_URL%"=="" (
    echo ❌ 未输入仓库链接
    pause
    exit /b 1
)

echo.
echo 第五步：连接到GitHub远程仓库
git remote add origin %REPO_URL%
echo.

echo 第六步：推送到GitHub
git branch -M main
git push -u origin main
echo.

echo ========================================
echo ✅ 文件已推送到GitHub！
echo.
echo 接下来需要：
echo 1. 访问你的GitHub仓库：%REPO_URL%
echo 2. 点击"Settings" → "Pages"
echo 3. Branch选择"main"，Folder选择"/ (root)"
echo 4. 点击"Save"
echo 5. 等待1-2分钟，获取网站链接
echo.
echo 完成后，你的网站地址将是：
echo https://你的用户名.github.io/beijing-travel-planner/
echo ========================================
pause