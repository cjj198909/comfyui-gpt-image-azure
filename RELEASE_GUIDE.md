# 发布指南

## 准备工作

在发布到GitHub之前，请确保已完成以下步骤：

### 1. 创建新的GitHub仓库
- 在GitHub上创建一个新的仓库
- 不要选择"Initialize this repository with a README"
- 记录仓库URL（例如：https://github.com/yourusername/comfyui-gpt-image-azure）

### 2. 设置本地Git配置
```bash
# 添加新的远程仓库
git remote add origin https://github.com/yourusername/comfyui-gpt-image-azure.git

# 验证远程仓库配置
git remote -v
# 应该显示：
# origin    https://github.com/yourusername/comfyui-gpt-image-azure.git (fetch)
# origin    https://github.com/yourusername/comfyui-gpt-image-azure.git (push)
# upstream  https://github.com/lceric/comfyui-gpt-image.git (fetch)
# upstream  https://github.com/lceric/comfyui-gpt-image.git (push)
```

### 3. 提交所有更改
```bash
# 添加所有文件
git add .

# 提交更改
git commit -m "feat: Add Azure OpenAI support

- Add automatic Azure OpenAI detection
- Implement dual authentication (Bearer token vs api-key)
- Add API version parameter handling
- Enhance error messages for Azure OpenAI
- Update documentation with Azure OpenAI examples
- Maintain backward compatibility with OpenAI API

Based on https://github.com/lceric/comfyui-gpt-image by lceric"
```

### 4. 推送到GitHub
```bash
# 推送到主分支
git push -u origin main
```

## 发布说明模板

在GitHub仓库的Release页面使用以下模板：

### 标题
`v1.0.0-azure - Azure OpenAI Support`

### 说明
```markdown
# Azure OpenAI Enhanced Version

This release adds comprehensive Azure OpenAI support to the original [comfyui-gpt-image](https://github.com/lceric/comfyui-gpt-image) project.

## 🚀 New Features

- **Azure OpenAI Integration**: Full support for Azure OpenAI services
- **Automatic Detection**: Automatically detects Azure OpenAI vs OpenAI official API
- **Dual Authentication**: Supports both Bearer tokens and Azure api-key authentication
- **Enhanced Error Handling**: Better error messages with service-specific guidance
- **Comprehensive Documentation**: Detailed Azure OpenAI setup instructions

## 📦 What's Changed

- Added Azure OpenAI service detection
- Implemented proper URL path construction for Azure OpenAI
- Enhanced authentication header handling
- Added automatic API version parameter for Azure OpenAI
- Improved error messages and troubleshooting guide

## 🔧 Configuration

### Azure OpenAI
```
api_base: https://your-resource-name.openai.azure.com/
auth_token: your-azure-openai-api-key
model: your-deployment-name
```

### OpenAI Official
```
api_base: https://api.openai.com/v1/
auth_token: sk-your-openai-api-key
model: gpt-image-1
```

## 🙏 Acknowledgments

This project is based on [comfyui-gpt-image](https://github.com/lceric/comfyui-gpt-image) by [@lceric](https://github.com/lceric).

## 📚 Documentation

- [README.md](README.md) - General usage instructions
- [AZURE_INTEGRATION.md](AZURE_INTEGRATION.md) - Azure OpenAI integration guide
- [CHANGELOG.md](CHANGELOG.md) - Detailed change log

**Full Changelog**: https://github.com/yourusername/comfyui-gpt-image-azure/commits/v1.0.0-azure
```

## 后续维护

### 保持与上游同步
```bash
# 获取上游更新
git fetch upstream

# 合并上游更改（如果需要）
git merge upstream/main
```

### 贡献回原项目
如果您的改进对原项目有价值，考虑向原项目提交Pull Request：
```bash
# 为原项目创建分支
git checkout -b feature-for-upstream

# 准备适合原项目的更改
# 提交并推送到您的fork
# 在GitHub上创建Pull Request到原项目
```

## 许可证合规

- 保持原始MIT许可证
- 在LICENSE文件中包含所有贡献者的版权声明
- 在项目文档中清楚标明项目来源和贡献
