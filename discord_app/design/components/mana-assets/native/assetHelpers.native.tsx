// discord_app/design/components/mana-assets/native/assetHelpers.native.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import size from "../../../../../_runtime/metro/00002__.js";

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
