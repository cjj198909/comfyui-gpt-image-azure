# Changelog

All notable changes to this project will be documented in this file.

This project is based on [comfyui-gpt-image](https://github.com/lceric/comfyui-gpt-image) by [lceric](https://github.com/lceric).

## [Unreleased] - Azure OpenAI Enhanced Version

### Added
- **Azure OpenAI Support**: Full integration with Azure OpenAI services
- **Automatic Service Detection**: Automatically detects Azure OpenAI vs OpenAI official API based on URL
- **Enhanced Authentication**: Supports both OpenAI Bearer tokens and Azure OpenAI api-key authentication
- **API Version Handling**: Automatically adds required api-version parameter for Azure OpenAI
- **Improved Error Messages**: Better error handling with service-specific guidance
- **Comprehensive Documentation**: Added Azure OpenAI integration guide and examples

### Changed
- **URL Path Construction**: Enhanced to support both OpenAI and Azure OpenAI path formats
- **Authentication Headers**: Dynamically sets appropriate authentication method based on service
- **Error Handling**: Improved error messages with specific guidance for Azure OpenAI issues
- **Documentation**: Updated README with Azure OpenAI configuration examples

### Technical Details
- Modified `nodes_api.py` to detect Azure OpenAI and construct appropriate API paths
- Enhanced `apis/client.py` with dual authentication support and improved URL handling
- Added automatic API version parameter for Azure OpenAI requests
- Improved error handling with service-specific error messages

### Files Modified
- `nodes_api.py`: Added Azure OpenAI detection and path construction
- `apis/client.py`: Enhanced authentication and URL handling
- `README.md`: Updated with Azure OpenAI usage instructions
- `AZURE_INTEGRATION.md`: New comprehensive integration guide

### Compatibility
- **Backward Compatible**: Full compatibility with existing OpenAI API configurations
- **Forward Compatible**: Ready for future Azure OpenAI API updates

---

## Original Project History

For the original project history, please refer to the [original repository](https://github.com/lceric/comfyui-gpt-image).
