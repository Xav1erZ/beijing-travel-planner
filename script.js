// 当DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动导航
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 导航按钮点击事件
    const navButton = document.querySelector('.nav-button');
    if (navButton) {
        navButton.addEventListener('click', function() {
            document.getElementById('ai-plan').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // 开始规划按钮点击事件
    const startPlanningBtn = document.getElementById('start-planning');
    if (startPlanningBtn) {
        startPlanningBtn.addEventListener('click', function() {
            document.getElementById('ai-plan').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // 行程标签切换
    const dayTabs = document.querySelectorAll('.day-tab');
    const dayContents = document.querySelectorAll('.day-content');
    
    dayTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有标签的active类
            dayTabs.forEach(t => t.classList.remove('active'));
            // 隐藏所有内容
            dayContents.forEach(content => content.classList.remove('active'));
            
            // 添加当前标签的active类
            this.classList.add('active');
            
            // 显示对应内容
            const day = this.getAttribute('data-day');
            const targetContent = document.getElementById(`day${day}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // 兴趣标签切换
    const interestTags = document.querySelectorAll('.interest-tag');
    interestTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 移除所有标签的active类
            interestTags.forEach(t => t.classList.remove('active'));
            // 添加当前标签的active类
            this.classList.add('active');
        });
    });

    // 预算滑块
    const budgetSlider = document.getElementById('budget');
    const budgetAmount = document.getElementById('budget-amount');
    
    if (budgetSlider && budgetAmount) {
        budgetSlider.addEventListener('input', function() {
            budgetAmount.textContent = this.value;
        });
    }

    // 生成AI行程计划
    const generatePlanBtn = document.getElementById('generate-plan');
    const planResult = document.getElementById('plan-result');
    const resultContent = planResult.querySelector('.result-content');
    
    if (generatePlanBtn) {
        generatePlanBtn.addEventListener('click', function() {
            // 获取用户选择
            const activeInterest = document.querySelector('.interest-tag.active').textContent;
            const budget = document.getElementById('budget').value;
            const travelStyle = document.querySelector('input[name="travel-style"]:checked').value;
            
            // 显示加载状态
            generatePlanBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> AI正在规划中...';
            generatePlanBtn.disabled = true;
            
            // 模拟AI规划过程（实际项目中这里应该调用API）
            setTimeout(() => {
                // 生成个性化行程
                const itinerary = generatePersonalizedItinerary(activeInterest, budget, travelStyle);
                
                // 更新结果区域
                resultContent.innerHTML = `
                    <div class="personalized-plan">
                        <h4>为您定制的北京三日游行程</h4>
                        <div class="plan-summary">
                            <p><i class="fas fa-user-circle"></i> <strong>兴趣偏好：</strong>${activeInterest}</p>
                            <p><i class="fas fa-wallet"></i> <strong>预算范围：</strong>${budget}元/人</p>
                            <p><i class="fas fa-hiking"></i> <strong>旅行风格：</strong>${getTravelStyleName(travelStyle)}</p>
                        </div>
                        
                        <div class="plan-details">
                            ${itinerary}
                        </div>
                        
                        <div class="plan-tips">
                            <h5><i class="fas fa-lightbulb"></i> AI规划建议：</h5>
                            <ul>
                                <li>建议提前预约故宫门票，避免排队</li>
                                <li>长城行程建议选择工作日前往，避开周末人流</li>
                                <li>根据预算，${budget < 1500 ? '推荐经济型住宿和公共交通' : budget < 3000 ? '推荐舒适型住宿和出租车出行' : '推荐豪华型住宿和专车服务'}</li>
                                <li><i class="fas fa-arrow-down"></i> 下方"信息来源"模块提供了官方参考链接，建议出行前查看最新信息</li>
                            </ul>
                        </div>
                        
                        <button class="cta-button secondary save-plan">
                            <i class="fas fa-download"></i> 保存行程计划
                        </button>
                    </div>
                `;
                
                // 添加保存按钮事件
                const savePlanBtn = resultContent.querySelector('.save-plan');
                if (savePlanBtn) {
                    savePlanBtn.addEventListener('click', function() {
                        alert('行程已保存！您可以在个人中心查看。');
                    });
                }
                
                // 恢复按钮状态
                generatePlanBtn.innerHTML = '<i class="fas fa-bolt"></i> 重新生成AI行程计划';
                generatePlanBtn.disabled = false;
                
                // 滚动到信息来源模块
                setTimeout(() => {
                    const sourcesSection = document.getElementById('sources-section');
                    if (sourcesSection) {
                        sourcesSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }, 500);
                
            }, 1500); // 模拟1.5秒的AI处理时间
        });
    }

    // 旅行风格名称映射
    function getTravelStyleName(style) {
        const styles = {
            'relaxed': '轻松休闲',
            'balanced': '平衡适中', 
            'intense': '紧凑高效'
        };
        return styles[style] || style;
    }

    // 生成个性化行程函数
    function generatePersonalizedItinerary(interest, budget, style) {
        let itineraryHTML = '';
        
        // 根据兴趣生成不同行程
        if (interest === '历史文化') {
            itineraryHTML = `
                <h5>第一天：深度历史文化体验</h5>
                <ul>
                    <li>故宫博物院 + 珍宝馆深度讲解</li>
                    <li>国家博物馆古代中国展览</li>
                    <li>晚上：老舍茶馆观看传统表演</li>
                </ul>
                
                <h5>第二天：皇家园林与长城</h5>
                <ul>
                    <li>慕田峪长城（人少景美）</li>
                    <li>颐和园昆明湖游船</li>
                    <li>晚上：品尝宫廷菜系</li>
                </ul>
                
                <h5>第三天：胡同文化与现代北京</h5>
                <ul>
                    <li>什刹海胡同三轮车游览</li>
                    <li>雍和宫参拜</li>
                    <li>798艺术区现代艺术展览</li>
                </ul>
            `;
        } else if (interest === '自然风光') {
            itineraryHTML = `
                <h5>第一天：山水园林</h5>
                <ul>
                    <li>颐和园全景游览（含万寿山）</li>
                    <li>圆明园遗址公园</li>
                    <li>晚上：奥林匹克公园夜景</li>
                </ul>
                
                <h5>第二天：长城自然风光</h5>
                <ul>
                    <li>八达岭长城（含缆车）</li>
                    <li>八达岭野生动物园</li>
                    <li>晚上：品尝农家特色菜</li>
                </ul>
                
                <h5>第三天：湖泊公园</h5>
                <ul>
                    <li>北海公园划船</li>
                    <li>景山公园俯瞰故宫</li>
                    <li>朝阳公园休闲散步</li>
                </ul>
            `;
        } else if (interest === '美食体验') {
            itineraryHTML = `
                <h5>第一天：传统美食探索</h5>
                <ul>
                    <li>前门大街老字号美食巡礼</li>
                    <li>大栅栏小吃街</li>
                    <li>晚上：全聚德烤鸭宴</li>
                </ul>
                
                <h5>第二天：胡同美食与市井味道</h5>
                <ul>
                    <li>牛街清真美食</li>
                    <li>簋街麻辣小龙虾</li>
                    <li>晚上：王府井小吃街</li>
                </ul>
                
                <h5>第三天：现代美食与创意料理</h5>
                <ul>
                    <li>三里屯网红餐厅打卡</li>
                    <li>国贸下午茶体验</li>
                    <li>晚上：特色私房菜</li>
                </ul>
            `;
        } else {
            // 默认行程
            itineraryHTML = `
                <h5>第一天：经典北京</h5>
                <ul>
                    <li>天安门广场 + 故宫博物院</li>
                    <li>景山公园俯瞰全景</li>
                    <li>晚上：王府井步行街</li>
                </ul>
                
                <h5>第二天：长城颐和园</h5>
                <ul>
                    <li>八达岭长城</li>
                    <li>颐和园昆明湖游船</li>
                    <li>晚上：奥体中心夜景</li>
                </ul>
                
                <h5>第三天：文化体验</h5>
                <ul>
                    <li>天坛公园</li>
                    <li>南锣鼓巷胡同游</li>
                    <li>晚上：前门大街购物</li>
                </ul>
            `;
        }
        
        // 根据预算调整建议
        const budgetNum = parseInt(budget);
        let budgetNote = '';
        
        if (budgetNum < 1000) {
            budgetNote = '<p class="budget-note"><i class="fas fa-info-circle"></i> 经济型建议：推荐青年旅舍、地铁出行、街边小吃</p>';
        } else if (budgetNum < 2500) {
            budgetNote = '<p class="budget-note"><i class="fas fa-info-circle"></i> 舒适型建议：推荐三星酒店、出租车+地铁混合出行、餐厅用餐</p>';
        } else {
            budgetNote = '<p class="budget-note"><i class="fas fa-info-circle"></i> 豪华型建议：推荐五星酒店、专车服务、高档餐厅</p>';
        }
        
        // 根据旅行风格调整
        let styleNote = '';
        if (style === 'relaxed') {
            styleNote = '<p class="style-note"><i class="fas fa-couch"></i> 轻松安排：每天2-3个主要景点，充足休息时间</p>';
        } else if (style === 'intense') {
            styleNote = '<p class="style-note"><i class="fas fa-running"></i> 紧凑安排：最大化景点参观，高效交通规划</p>';
        }
        
        return itineraryHTML + budgetNote + styleNote;
    }

    // 示例行程按钮
    const exampleItineraryBtn = document.querySelector('.cta-button.secondary');
    if (exampleItineraryBtn && exampleItineraryBtn.textContent.includes('查看示例行程')) {
        exampleItineraryBtn.addEventListener('click', function() {
            alert('示例行程已显示在"行程推荐"部分！您可以通过切换标签查看不同天的详细安排。');
            document.getElementById('itinerary').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // 页面滚动时更新导航栏样式
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // 初始化：显示第一个行程
    if (dayTabs.length > 0 && dayContents.length > 0) {
        dayTabs[0].classList.add('active');
        dayContents[0].classList.add('active');
    }

    // 控制台欢迎信息
    console.log('🎉 AI北京三日游策划公司网站已加载完成！');
    console.log('👤 创始人：一人公司 · 旅行规划师小明');
    console.log('🎓 项目：计算机科学结课作品');
    console.log('📍 地点：北京');
    console.log('🚀 使用纯HTML/CSS/JS构建，支持GitHub Pages部署');
});