# 腾讯自研虾作业 - AI员工团队：北京三日游策划公司

![项目状态](https://img.shields.io/badge/状态-已完成-success)
![技术栈](https://img.shields.io/badge/技术-HTML/CSS/JS/Flask-blue)
![部署状态](https://img.shields.io/badge/部署-GitHub_Pages-绿色)
![AI集成](https://img.shields.io/badge/AI-智谱AI-蓝色)

## 项目简介
这是一个"腾讯自研虾作业：创建你的AI员工团队"的结课作品项目。我们创建了一个AI北京三日游策划公司网站，结合了前端网页设计和后端AI API集成，实现了完整的旅行规划解决方案。

**项目作者：高梓翔**

## 在线演示
- 🌐 **网站地址**：[https://xav1erz.github.io/beijing-travel-planner/](https://xav1erz.github.io/beijing-travel-planner/)
- 🐙 **GitHub仓库**：[https://github.com/Xav1erZ/beijing-travel-planner](https://github.com/Xav1erZ/beijing-travel-planner)

## 核心功能
- 🎯 **AI智能规划**：根据用户兴趣、预算和旅行风格生成个性化北京三日游行程
- 🤖 **真实AI集成**：集成智谱AI API，实现动态、个性化的行程介绍
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
├── script.js           # JavaScript交互文件（含AI生成功能）
├── app.py              # Flask后端服务器（可选，用于本地AI API调用）
├── requirements.txt    # Python依赖文件
├── README.md           # 项目说明文件
└── 腾讯自研虾作业_高梓翔_AI员工团队_最终提交版.pptx  # 项目PPT演示文稿
```

## 技术架构

### 前端技术栈
- **HTML5**：语义化标签，清晰的内容结构
- **CSS3**：Flexbox/Grid布局，响应式设计，CSS变量
- **JavaScript**：DOM操作，事件处理，异步API调用

### 后端技术栈（可选本地运行）
- **Python Flask**：轻量级Web框架
- **智谱AI API**：真实的AI内容生成
- **RESTful API**：前后端分离架构

### 部署方式
- **GitHub Pages**：静态网站托管
- **Flask服务器**：本地运行AI功能（需要API密钥）

## 快速开始

### 1. 使用GitHub Pages版本（推荐，静态网站）
- **访问地址**：[https://xav1erz.github.io/beijing-travel-planner/](https://xav1erz.github.io/beijing-travel-planner/)
- **特点**：无需任何配置，开箱即用
- **AI功能**：使用智能模拟数据，无需API密钥
- **适合场景**：快速演示、分享、评审

### 2. 本地运行带AI功能版本（完整功能）
```bash
# 克隆项目
git clone https://github.com/Xav1erZ/beijing-travel-planner.git
cd beijing-travel-planner

# 安装依赖
pip install -r requirements.txt

# 运行Flask服务器
python app.py

# 访问 http://127.0.0.1:5001
```
- **特点**：完整的智谱AI API集成
- **AI功能**：真实的AI内容生成，需要API密钥（已预配置）
- **适合场景**：本地开发、测试、体验完整AI功能

### 3. 两种模式的区别
| 功能 | GitHub Pages版本 | 本地Flask版本 |
|------|----------------|---------------|
| AI生成行程介绍 | ✅ 智能模拟数据 | ✅ 真实智谱AI API |
| AI行程规划 | ✅ 智能模拟数据 | ✅ 真实智谱AI API |
| 静态内容 | ✅ 完整 | ✅ 完整 |
| 响应式设计 | ✅ 完整 | ✅ 完整 |
| 部署要求 | 无 | Python 3.8+ |
| API密钥 | 不需要 | 需要（已预配置） |

### 4. 常见问题解决

#### Q: 在GitHub Pages上看到"AI服务暂时不可用"错误？
**A**: 这是正常的！GitHub Pages只支持静态文件，无法运行Python Flask服务器。请：
1. 使用"生成AI行程计划"按钮（使用模拟数据）
2. 或在本地运行 `python app.py` 体验完整AI功能

#### Q: 如何在本地运行完整AI功能？
**A**: 
1. 确保已安装Python 3.8+
2. 运行 `pip install -r requirements.txt`
3. 运行 `python app.py`
4. 访问 http://127.0.0.1:5001

#### Q: API密钥会过期吗？
**A**: 项目中已预配置API密钥，但智谱AI的API密钥可能有使用限制或过期时间。如果遇到API错误，可以在`app.py`中替换为有效的API密钥。

## AI功能详解

### 1. AI生成行程介绍
- 前端：用户选择兴趣偏好、预算范围、旅行风格
- 后端：调用智谱AI API生成个性化行程介绍
- 特点：每次生成都是唯一的，基于用户偏好动态调整

### 2. API调用流程
```python
# app.py中的关键代码
@app.route('/generate_speech', methods=['POST'])
def generate_speech():
    data = request.get_json()
    preferences = data.get('preferences', '')
    
    # 调用智谱AI API
    response = client.chat.completions.create(
        model="glm-4-flash",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.8,
        max_tokens=500
    )
    
    return jsonify({"speech": speech, "status": "success"})
```

## 项目特色

### 1. 完整的AI员工团队概念
- **AI行程规划师**：智能生成个性化行程
- **AI客服助手**：提供详细的景点介绍
- **AI预算分析师**：根据预算推荐最佳方案

### 2. 用户体验优化
_iPad上优化了表单交互
- 移动端适配的响应式设计
- 平滑的动画和过渡效果
- 直观的用户界面和操作流程

### 3. 教育价值
- 展示了如何将AI技术集成到实际应用中
- 体现了前后端分离的开发模式
- 展示了GitHub Pages的部署流程

## 部署指南

### GitHub Pages部署
1. 项目已配置为GitHub Pages托管
2. 自动部署main分支到根目录
3. 访问链接：https://xav1erz.github.io/beijing-travel-planner/

### 自定义部署
如需修改部署，可在GitHub仓库的Settings > Pages中配置：
- Branch: `main`
- Folder: `/ (root)`

## 项目成果

### 1. 网页应用
- 完整的旅行规划网站
- 响应式设计，跨平台兼容
- AI集成功能

### 2. 演示PPT
- 包含项目介绍、功能展示、技术架构
- 截图展示实际效果
- 部署流程说明

### 3. 代码仓库
- 完整的前后端代码
- 详细的文档说明
- MIT许可证，可自由使用

## 许可证
本项目为"腾讯自研虾作业"结课作品，采用MIT许可证。您可以自由使用、修改和分享代码。

## 联系信息
- **项目作者**：高梓翔
- **项目类型**：腾讯自研虾作业 - AI员工团队
- **技术栈**：HTML5, CSS3, JavaScript, Python Flask, 智谱AI API
- **部署方式**：GitHub Pages + Flask本地服务器

---

**感谢评审！** 🎉

**项目链接汇总：**
- 网站：https://xav1erz.github.io/beijing-travel-planner/
- 仓库：https://github.com/Xav1erZ/beijing-travel-planner
- PPT：包含在本仓库中
