// === Module 6386: react-native ===

// Module 6386 (react-native)
import react_native from "react-native" /* 17 */;

let size;

const PixelRatio = react_native.PixelRatio;

export const areDimensionsNotEqual = function areDimensionsNotEqual(width, height) {
  const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(width);
  return abs(pixelSizeForLayoutSize - PixelRatio.getPixelSizeForLayoutSize(height)) > 1;
};
export const areDimensionsEqual = function areDimensionsEqual(width, width2) {
  const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(width);
  return abs(pixelSizeForLayoutSize - PixelRatio.getPixelSizeForLayoutSize(width)) <= 1;
};
export const roundOffPixel = function roundOffPixel(arg0) {
  return PixelRatio.roundToNearestPixel(arg0);
};
export const measureParentSize = function measureParentSize(current) {
  size = { x: 0, y: 0, width: 0, height: 0 };
  current.measureLayout(current, (x, y, arg2, arg3) => {
    size.x = x;
    size.y = y;
    size.width = PixelRatio.roundToNearestPixel(arg2);
    size.height = PixelRatio.roundToNearestPixel(arg3);
  });
  const size1 = { width: size.width, height: size.height };
  return size1;
};
export const measureFirstChildLayout = function measureFirstChildLayout(current, current2) {
  size = { x: 0, y: 0, width: 0, height: 0 };
  current.measureLayout(current2, (x, y, arg2, arg3) => {
    size.x = x;
    size.y = y;
    size.width = PixelRatio.roundToNearestPixel(arg2);
    size.height = PixelRatio.roundToNearestPixel(arg3);
  });
  return size;
};
export const measureItemLayout = function measureItemLayout(current, width) {
  size = { x: 0, y: 0, width: 0, height: 0 };
  current.measureLayout(current, (x, y, arg2, arg3) => {
    size.x = x;
    size.y = y;
    size.width = PixelRatio.roundToNearestPixel(arg2);
    size.height = PixelRatio.roundToNearestPixel(arg3);
  });
  if (width) {
    const _Math = Math;
    width = width.width;
    const pixelSizeForLayoutSize = size.getPixelSizeForLayoutSize(size.width);
    if (abs(pixelSizeForLayoutSize - size.getPixelSizeForLayoutSize(width)) <= 1) {
      size.width = width.width;
    }
    const _Math2 = Math;
    const height = width.height;
    const abs2 = Math.abs;
    const pixelSizeForLayoutSize1 = obj.getPixelSizeForLayoutSize(size.height);
    if (abs2(pixelSizeForLayoutSize1 - size.getPixelSizeForLayoutSize(height)) <= 1) {
      size.height = width.height;
    }
  }
  return size;
};