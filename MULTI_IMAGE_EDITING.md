# Multi-Image Editing Feature

## Overview

This document describes the multi-image editing feature implemented in the Azure OpenAI Enhanced version of comfyui-gpt-image.

## Feature Description

The multi-image editing feature allows users to process multiple images simultaneously with flexible mask handling options. This significantly improves workflow efficiency when working with batch operations.

## Key Capabilities

### 1. Multiple Image Processing
- Process up to 8 images simultaneously (limited by `n` parameter)
- Maintains compatibility with single-image workflows
- Supports both generation and editing operations

### 2. Flexible Mask Handling
- **Single Mask Mode**: Apply one mask to all images
- **Individual Mask Mode**: Use different masks for each image
- **Mixed Mode**: Some images with masks, others without

### 3. Enhanced Input Validation
- Validates mask count against image count
- Ensures dimension compatibility
- Provides clear error messages for mismatched inputs

## Technical Implementation

### Core Logic Changes

#### Before (Single Image Only)
```python
if mask is not None:
    if image.shape[0] != 1:
        raise Exception("Cannot use a mask with multiple image")
    # ... process single mask
```

#### After (Multi-Image Support)
```python
if mask is not None:
    batch_size = image.shape[0]
    
    if mask.shape[0] == 1 and batch_size > 1:
        # Single mask applied to all images
        mask_batch = mask.repeat(batch_size, 1, 1)
    elif mask.shape[0] == batch_size:
        # Individual mask for each image
        mask_batch = mask
    else:
        raise Exception(f"Mask batch size ({mask.shape[0]}) must be 1 or equal to image batch size ({batch_size})")
```

### File Naming Strategy

#### Single Image
- Image: `("image", img_binary)`
- Mask: `("mask", mask_binary)`

#### Multiple Images
- Images: `("image[]", img_binary)` for each image
- Masks: `("mask[]", mask_binary)` for each mask

### API Integration

The multi-image feature integrates seamlessly with both OpenAI and Azure OpenAI APIs:

- **OpenAI**: Uses standard multi-part form data upload
- **Azure OpenAI**: Maintains compatibility with Azure's API format
- **File Management**: Proper naming and organization of multiple files

## Usage Examples

### Example 1: Single Mask for Multiple Images

```python
# Input
images = torch.tensor([image1, image2, image3])  # Shape: (3, H, W, C)
mask = torch.tensor([mask1])                     # Shape: (1, H, W)

# Result
# All three images will be edited using the same mask
```

### Example 2: Individual Masks for Each Image

```python
# Input
images = torch.tensor([image1, image2, image3])  # Shape: (3, H, W, C)
masks = torch.tensor([mask1, mask2, mask3])      # Shape: (3, H, W)

# Result
# Each image will be edited using its corresponding mask
```

### Example 3: Error Case

```python
# Input
images = torch.tensor([image1, image2, image3])  # Shape: (3, H, W, C)
masks = torch.tensor([mask1, mask2])             # Shape: (2, H, W)

# Result
# Error: Mask batch size (2) must be 1 or equal to image batch size (3)
```

## Performance Considerations

### Benefits
- **Reduced API Calls**: Process multiple images in single request
- **Lower Latency**: Batch processing reduces round-trip time
- **Cost Efficiency**: Potential cost savings with batch operations

### Limitations
- **Memory Usage**: Higher memory consumption for multiple images
- **Processing Time**: Longer processing time for large batches
- **API Limits**: Subject to provider's batch size limitations

## Error Handling

The implementation includes comprehensive error handling:

### Validation Errors
- Mask count mismatch
- Dimension incompatibility
- Invalid batch sizes

### API Errors
- Network timeouts for large batches
- Provider-specific limitations
- Authentication issues

### Recovery Strategies
- Automatic batch size reduction
- Fallback to single-image processing
- Detailed error reporting

## Testing

### Test Coverage
- Single mask with multiple images
- Individual masks for each image
- Error cases and edge conditions
- File naming and organization
- API integration testing

### Test Files
- `test_multi_image_logic.py`: Core logic testing
- `test_multi_image_editing.py`: Full integration testing (requires ComfyUI)

## Future Enhancements

### Planned Features
- Dynamic batch size optimization
- Progress indicators for large batches
- Parallel processing for independent operations
- Advanced mask composition options

### Performance Optimizations
- Memory usage optimization
- Streaming processing for large batches
- Caching for repeated operations
- GPU acceleration support

## Backward Compatibility

The multi-image feature maintains full backward compatibility:
- Single-image workflows continue to work unchanged
- Existing configurations and parameters remain valid
- No breaking changes to the API interface

## Conclusion

The multi-image editing feature significantly enhances the capabilities of the comfyui-gpt-image node while maintaining simplicity and reliability. It provides users with powerful batch processing capabilities for improved workflow efficiency.
