## comfyui-gpt-image (Azure OpenAI Enhanced)

This project is a fork of [comfyui-gpt-image](https://github.com/lceric/comfyui-gpt-image) by [lceric](https://github.com/lceric), enhanced with full Azure OpenAI support.

`comfyui-gpt-image` ports the official ComfyUI GPT-API node, adding support for customizable `api_base`, `auth_token`, and `model` settings. This fork extends the original project with seamless Azure OpenAI integration.

### Features
- 🎸 Support config auth_token, base_url in ComfyUI Settings(^1.2.0),
- 🎸 Configure custom API endpoints (`api_base`)
- 🎸 Support for authentication tokens (`auth_token`)
- 🎸 Easily specify different GPT models (`model`)
- 🎸 **Full Azure OpenAI support** with automatic detection
- 🎸 **Multi-image editing support** - process multiple images simultaneously
- 🎸 **Flexible mask handling** - single mask for all images or individual masks
- 🎸 Enhanced error handling for both OpenAI and Azure OpenAI
- 🎸 Seamless integration with ComfyUI

### Requirements

- Python 3.10+
- ComfyUI (latest version recommended)

### Installation

有以下几种方式可以在ComfyUI中安装这个node：

#### 方式1：通过ComfyUI Manager安装（推荐）

1. 在ComfyUI中打开Manager
2. 搜索 `comfyui-gpt-image` 或 `gpt-image`
3. 点击安装
4. 重启ComfyUI

#### 方式2：手动克隆安装

将仓库克隆到ComfyUI的custom_nodes目录：

```bash
cd ComfyUI/custom_nodes

# 如果您使用的是这个Azure OpenAI增强版本
git clone https://github.com/cjj198909/comfyui-gpt-image-azure.git comfyui-gpt-image

# 或者使用原始版本
git clone https://github.com/lceric/comfyui-gpt-image.git
```

#### 方式3：下载ZIP文件安装

1. 从GitHub下载ZIP文件
2. 解压到 `ComfyUI/custom_nodes/comfyui-gpt-image` 目录
3. 确保文件夹名称为 `comfyui-gpt-image`

#### 安装依赖项

```bash
cd ComfyUI/custom_nodes/comfyui-gpt-image

pip install -r requirements.txt
```

#### 完成安装

重启ComfyUI后，新的GPT node将自动加载并可用。

> 📖 **详细安装指南**: 如果遇到安装问题，请查看 [INSTALLATION.md](INSTALLATION.md) 获取完整的安装指导和故障排除。

### Preview

Here’s a quick look at the GPT-API node inside ComfyUI:

**生成图片**

![生成图片](example/gpt-image.png)

**编辑图片**

![生成图片](example/gpt-image-mask.png)

### Usage

After restarting ComfyUI:

- Locate the GPT-API node in the node list.
- Configure your `api_base`, `auth_token`, and `model` parameters as needed.
- Connect it to your workflow and start generating content with GPT!

#### Using with OpenAI Official API

For OpenAI official API, configure:
- `api_base`: `https://api.openai.com/v1/`
- `auth_token`: Your OpenAI API key (sk-xxxx...)
- `model`: `gpt-image-1` or other supported models

#### Using with Azure OpenAI

For Azure OpenAI, configure:
- `api_base`: `https://your-resource-name.openai.azure.com/`
- `auth_token`: Your Azure OpenAI API key
- `model`: Your deployment name (e.g., `gpt-image-1`)

**Important**: For Azure OpenAI, the `model` parameter should be your deployment name, not the model name.

In `v1.2.0`, support configure `api_base`, `auth_token` in the comfyui settings, as shown below:

![alt text](./example/comfyui-settings.png)

> The configuration in the workflow node is used first. If it is empty, the ComfiyUI configuration is used.

| Parameter   | Description                                           |
|-------------|-------------------------------------------------------|
| api_base    | Base URL of your GPT API endpoint (OpenAI or Azure OpenAI). |
| auth_token  | Authentication token for secured API access.         |
| model       | Model name (OpenAI) or deployment name (Azure OpenAI). |

### 🚀 快速开始

1. **找到节点**: 在ComfyUI中右键空白区域，搜索 "GPT" 或 "OpenAI"，找到 "Ports OpenAI GPT Image 1" 节点

2. **添加节点**: 双击将节点添加到工作流

3. **基本配置**:
   ```
   prompt: "一只可爱的猫咪在花园里玩耍"
   api_base: "https://api.openai.com/v1/" (OpenAI) 或 "https://your-resource.openai.azure.com/" (Azure)
   auth_token: "你的API密钥"
   model: "gpt-image-1" (OpenAI) 或 "你的部署名称" (Azure)
   ```

4. **连接输出**: 将节点的IMAGE输出连接到PreviewImage节点

5. **运行**: 点击Queue Prompt开始生成图像

> 💡 **提示**: 首次使用建议先在ComfyUI设置中配置API信息，这样就不需要在每个节点中重复输入。

### 🔧 多图编辑功能

这个增强版本支持强大的多图编辑功能：

#### **多图同时编辑**
- 支持一次性处理多张图像
- 可以使用单个遮罩应用到所有图像
- 也可以为每张图像使用不同的遮罩

#### **使用方法**:

1. **单遮罩多图编辑**:
   - 输入：多张图像 + 单个遮罩
   - 效果：所有图像都使用相同的遮罩区域进行编辑
   - 适用场景：批量处理相似位置的修改

2. **多遮罩多图编辑**:
   - 输入：多张图像 + 相同数量的遮罩
   - 效果：每张图像使用对应的遮罩进行编辑
   - 适用场景：精确控制每张图像的编辑区域

#### **支持的操作**:
- ✅ 批量图像生成（设置 `n` 参数）
- ✅ 多图同时编辑（使用单个遮罩）
- ✅ 多图个别编辑（使用多个遮罩）
- ✅ 混合处理（部分图像使用遮罩，部分不使用）

#### **注意事项**:
- 遮罩数量必须为1（应用到所有图像）或等于图像数量
- 所有图像和遮罩必须具有相同的尺寸
- 多图编辑会消耗更多API配额

### Troubleshooting

**Node not showing up?**
Make sure you installed all dependencies and restarted ComfyUI.

**API errors?**
- Double-check your api_base, auth_token, and model values.
- For Azure OpenAI, ensure your deployment name matches the model parameter.
- Verify your Azure OpenAI resource is properly configured and the model is deployed.

**Azure OpenAI 404 errors?**
- Check if your deployment name is correct (use deployment name, not model name).
- Ensure your Azure OpenAI resource URL is correct (should end with `.openai.azure.com/`).
- Verify the model is properly deployed in your Azure OpenAI resource.

**Multi-image editing issues?**
- Ensure mask count is 1 (single mask) or equals image count (individual masks).
- Verify all images and masks have the same dimensions.
- Check that your API provider supports multi-image operations.
- For large batches, consider processing in smaller groups to avoid timeouts.

**OpenAI vs Azure OpenAI configuration:**
- OpenAI: `api_base` should be `https://api.openai.com/v1/`
- Azure OpenAI: `api_base` should be `https://your-resource-name.openai.azure.com/`

### License

This project is licensed under the MIT License.

### Acknowledgements

This project is based on [comfyui-gpt-image](https://github.com/lceric/comfyui-gpt-image) by [lceric](https://github.com/lceric).

**Original Project**: [lceric/comfyui-gpt-image](https://github.com/lceric/comfyui-gpt-image)

**Enhancements in this fork**:
- Full Azure OpenAI API support with automatic detection
- Multi-image editing support with flexible mask handling
- Enhanced error handling for both OpenAI and Azure OpenAI services
- Improved URL and authentication handling
- Comprehensive documentation for Azure OpenAI integration
- Support for batch processing and parallel image operations

[ComfyUI](https://www.comfy.org/zh-cn/) - Powerful node-based UI for generative AI.

Thanks to the ComfyUI community for inspiration and support!
