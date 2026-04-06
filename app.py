from flask import Flask, request, jsonify, send_from_directory
from zhipuai import ZhipuAI
import os
import time

app = Flask(__name__, static_folder='.', template_folder='.')

# 初始化智谱AI客户端
client = ZhipuAI(api_key="dd5c97dffb7242c283d75642a4330aba.W552viRnJtKQUXcs")

@app.route('/')
def index():
    # 直接返回 index.html 文件内容
    with open('index.html', 'r', encoding='utf-8') as f:
        return f.read()

@app.route('/generate_speech', methods=['POST'])
def generate_speech():
    try:
        data = request.get_json()
        preferences = data.get('preferences', '')
        
        # 优化后的提示词工程
        prompt = f"""你是一个专业的北京旅行规划师，请根据用户偏好生成一份个性化的北京三日游行程介绍。

用户偏好：{preferences}

请生成一份自然、亲切的行程介绍，要求：
1. 用第一人称"我"的语气，像朋友一样亲切
2. 200-300字，包含具体景点和体验建议
3. 根据用户偏好突出个性化特色
4. 给出实用的旅行建议和注意事项
5. 语气热情、专业、有感染力

请直接生成介绍内容，不要加"根据您的偏好"等开场白，直接进入主题。"""
        
        # 调用智谱AI API
        response = client.chat.completions.create(
            model="glm-4-flash",  # 使用glm-4-flash模型，响应快
            messages=[{"role": "user", "content": prompt}],
            temperature=0.8,  # 增加创造力
            top_p=0.7,
            max_tokens=500
        )
        
        speech = response.choices[0].message.content
        
        # 确保返回格式正确
        return jsonify({
            "speech": speech,
            "status": "success",
            "model": "glm-4-flash"
        })
        
    except Exception as e:
        # 如果API调用失败，返回友好的错误信息
        error_message = f"AI服务暂时不可用：{str(e)}"
        
        # 尝试使用备用模型或降级方案
        try:
            # 使用更轻量的模型重试
            response = client.chat.completions.create(
                model="glm-3-turbo",
                messages=[{"role": "user", "content": f"生成北京三日游介绍，偏好：{preferences}"}],
                max_tokens=300
            )
            speech = response.choices[0].message.content
            return jsonify({
                "speech": speech,
                "status": "success_with_fallback",
                "model": "glm-3-turbo"
            })
        except:
            # 如果重试也失败，返回模拟数据
            fallback_responses = [
                f"看到您对{preferences.split('，')[0] if '，' in preferences else preferences}这么感兴趣，我特别为您设计了一个精彩的北京之旅！第一天从故宫开始，感受皇家气派；第二天登上长城，体验'不到长城非好汉'的豪情；第三天漫步胡同，品味老北京的生活气息。全程都会根据您的偏好精心安排！",
                f"基于您的{preferences}，我为您打造了一个难忘的北京三日游！首日游览天安门和故宫，了解北京的历史底蕴；次日前往颐和园和长城，欣赏自然与人文的完美结合；最后一天体验胡同文化和现代北京的融合。每个环节都考虑到了您的个性化需求！",
                f"为您量身定制的北京之旅即将开始！考虑到您的{preferences}，行程将重点放在您最感兴趣的方面。从皇家建筑到市井生活，从自然风光到美食体验，三天时间让您全面感受北京的多元魅力。我已经为您规划好了最佳路线和体验方式！"
            ]
            
            import random
            speech = random.choice(fallback_responses)
            
            return jsonify({
                "speech": speech,
                "status": "fallback",
                "model": "simulated"
            })

# 添加静态文件路由
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='0.0.0.0')  # 允许外部访问