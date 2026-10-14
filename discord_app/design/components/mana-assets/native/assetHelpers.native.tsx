// === Module 6277: assetHelpers ===

// Module 6277 (assetHelpers)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const PixelRatio = _mod17.PixelRatio;
const result = size.fileFinishedImporting("design/components/mana-assets/native/assetHelpers.native.tsx");

export const getAssetSource = function getAssetSource(arg0) {
  return arg0[Math.min(Math, Math.ceil(Math, PixelRatio.get(PixelRatio)), 3)];
};
export const getAssetSizeStyle = function getAssetSizeStyle(size) {
  ({ width, height, scale } = size);
  if (scale === undefined) {
    scale = 1;
  }
  ({ intrinsicWidth, intrinsicHeight } = size);
  if (null == width) {
    if (null == height) {
      size = { width: intrinsicWidth * scale, height: intrinsicHeight * scale };
      let size2 = size;
    }
    return size2;
  }
  if (null != width) {
    if (null != height) {
      const size1 = { width, height };
      size2 = size1;
    }
  }
  size2 = { width, height, aspectRatio: intrinsicWidth / intrinsicHeight };
};
export const getAssetResizeMode = function getAssetResizeMode(resizeMode) {
  let str = "contain";
  if (null != resizeMode) {
    str = resizeMode;
  }
  return str;
};