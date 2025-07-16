# Azure OpenAI 集成使用说明

## 概述

本项目现在完全支持Azure OpenAI服务，可以自动检测并适配Azure OpenAI和OpenAI官方API。

## 主要修改

### 1. 自动服务检测
- 通过URL自动检测是否为Azure OpenAI服务
- 支持 `azure.com` 和 `cognitiveservices.azure.com` 域名

### 2. 路径适配
- **OpenAI官方**: `/images/generations` 和 `/images/edits`
- **Azure OpenAI**: `/openai/deployments/{model}/images/generations` 和 `/openai/deployments/{model}/images/edits`

### 3. 认证方式
- **OpenAI官方**: `Authorization: Bearer {token}`
- **Azure OpenAI**: `api-key: {token}`

### 4. API版本
- Azure OpenAI自动添加 `api-version=2024-02-15-preview` 参数

## 配置示例

### OpenAI官方API
```
api_base: https://api.openai.com/v1/
auth_token: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
model: gpt-image-1
```

### Azure OpenAI
```
api_base: https://your-resource-name.openai.azure.com/
auth_token: your-azure-openai-api-key
model: your-deployment-name
```

## 重要说明

1. **Azure OpenAI的model参数**: 应该使用部署名称(deployment name)，而不是模型名称
2. **URL格式**: Azure OpenAI的URL应该以 `.openai.azure.com/` 结尾
3. **API密钥**: 使用Azure OpenAI控制台中的API密钥

## 故障排除

### 404错误
- 检查deployment名称是否正确
- 确认Azure OpenAI资源URL正确
- 验证模型是否已正确部署

### 401错误
- 检查API密钥是否有效
- 确认密钥权限是否足够

### 路径错误
- 不要在api_base中包含完整的endpoint路径
- 让系统自动构建正确的路径

## 测试验证

运行测试脚本验证配置：
```bash
python test_azure_detection.py
```

这将显示不同URL的检测结果和对应的API路径。
