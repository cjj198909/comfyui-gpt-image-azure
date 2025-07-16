# ComfyUI 安装指南

## 在ComfyUI中安装GPT-Image节点

### 🎯 推荐安装方式

#### 方式1：使用ComfyUI Manager（最简单）

1. **打开ComfyUI Manager**
   - 在ComfyUI界面中，点击 "Manager" 按钮
   - 或者使用快捷键打开Manager

2. **搜索节点**
   - 在搜索框中输入 `gpt-image` 或 `comfyui-gpt-image`
   - 找到对应的节点包

3. **安装**
   - 点击 "Install" 按钮
   - 等待安装完成

4. **重启ComfyUI**
   - 安装完成后重启ComfyUI
   - 节点将自动加载

#### 方式2：手动克隆安装

1. **找到ComfyUI的custom_nodes目录**
   ```bash
   # 通常在以下位置之一：
   # Windows: C:\Users\YourUsername\ComfyUI\custom_nodes
   # Mac/Linux: ~/ComfyUI/custom_nodes
   # 或者您的ComfyUI安装目录下的custom_nodes文件夹
   ```

2. **克隆仓库**
   ```bash
   cd ComfyUI/custom_nodes
   
   # Azure OpenAI增强版本（推荐）
   git clone https://github.com/yourusername/comfyui-gpt-image-azure.git comfyui-gpt-image
   
   # 或者原始版本
   git clone https://github.com/lceric/comfyui-gpt-image.git
   ```

3. **安装依赖**
   ```bash
   cd comfyui-gpt-image
   pip install -r requirements.txt
   ```

4. **重启ComfyUI**

#### 方式3：下载ZIP文件安装

1. **下载ZIP文件**
   - 访问GitHub仓库页面
   - 点击绿色的 "Code" 按钮
   - 选择 "Download ZIP"

2. **解压文件**
   - 将ZIP文件解压到 `ComfyUI/custom_nodes/` 目录
   - 确保文件夹名称为 `comfyui-gpt-image`

3. **安装依赖**
   ```bash
   cd ComfyUI/custom_nodes/comfyui-gpt-image
   pip install -r requirements.txt
   ```

4. **重启ComfyUI**

### 📦 验证安装

1. **检查节点是否出现**
   - 重启ComfyUI后，在节点列表中搜索 "GPT" 或 "Image"
   - 应该能看到 "GPTImage1Generate" 节点

2. **测试节点功能**
   - 添加GPTImage1Generate节点到工作流
   - 配置API参数
   - 运行测试

### 🔧 常见问题解决

#### 问题1：节点不显示

**原因**：安装不完整或依赖缺失

**解决方案**：
```bash
# 重新安装依赖
cd ComfyUI/custom_nodes/comfyui-gpt-image
pip install -r requirements.txt

# 或者使用conda
conda install --file requirements.txt
```

#### 问题2：导入错误

**原因**：Python环境问题

**解决方案**：
```bash
# 检查Python环境
python --version

# 确保使用ComfyUI相同的Python环境
# 如果使用虚拟环境，先激活环境
source venv/bin/activate  # Linux/Mac
# 或
venv\Scripts\activate     # Windows

# 然后重新安装依赖
pip install -r requirements.txt
```

#### 问题3：API连接失败

**原因**：网络问题或API配置错误

**解决方案**：
1. 检查网络连接
2. 验证API密钥和端点URL
3. 查看ComfyUI控制台的错误信息

#### 问题4：权限错误

**原因**：文件权限问题

**解决方案**：
```bash
# Linux/Mac
sudo chown -R $USER:$USER ComfyUI/custom_nodes/comfyui-gpt-image

# Windows（以管理员身份运行命令提示符）
icacls ComfyUI\custom_nodes\comfyui-gpt-image /grant %USERNAME%:F /t
```

### 🎨 使用入门

1. **添加节点**
   - 在ComfyUI中右键空白区域
   - 搜索 "GPTImage1Generate"
   - 添加到工作流

2. **基本配置**
   - `prompt`: 输入图像描述
   - `api_base`: API端点URL
   - `auth_token`: API密钥
   - `model`: 模型名称

3. **连接工作流**
   - 将节点连接到PreviewImage或其他图像处理节点
   - 运行工作流

### 📚 更多帮助

- [使用说明](README.md)
- [Azure OpenAI集成指南](AZURE_INTEGRATION.md)
- [故障排除](README.md#troubleshooting)
- [贡献指南](CONTRIBUTING.md)

如果遇到问题，请查看ComfyUI的控制台输出，通常会有详细的错误信息帮助诊断问题。
