// _runtime/06894_areDimensionsNotEqual.js
import _mod17 from "metro/00017__.js";

const PixelRatio = _mod17.PixelRatio;

export const areDimensionsNotEqual = function areDimensionsNotEqual(height, height2) {
  const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(height);
  return Math.abs(pixelSizeForLayoutSize - PixelRatio.getPixelSizeForLayoutSize(height2)) > 1;
};
export const areDimensionsEqual = function areDimensionsEqual(width, width) {
  const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(width);
  return Math.abs(pixelSizeForLayoutSize - PixelRatio.getPixelSizeForLayoutSize(width)) <= 1;
};
export const roundOffPixel = function roundOffPixel(arg0) {
  return PixelRatio.roundToNearestPixel(arg0);
};
export const measureParentSize = function measureParentSize(current) {
  let size = { x: 0, y: 0, width: 0, height: 0 };
  current.measureLayout(current, (x, y, arg2, arg3) => {
    size.x = x;
    size.y = y;
    size.width = PixelRatio.roundToNearestPixel(arg2);
    size.height = PixelRatio.roundToNearestPixel(arg3);
  });
  size = { width: size.width, height: size.height };
  return size;
};
export const measureFirstChildLayout = function measureFirstChildLayout(current, current2) {
  const size = { x: 0, y: 0, width: 0, height: 0 };
  current.measureLayout(current2, (x, y, arg2, arg3) => {
    size.x = x;
    size.y = y;
    size.width = PixelRatio.roundToNearestPixel(arg2);
    size.height = PixelRatio.roundToNearestPixel(arg3);
  });
  return size;
};
export const measureItemLayout = function measureItemLayout(current, width) {
  const size = { x: 0, y: 0, width: 0, height: 0 };
  current.measureLayout(current, (x, y, arg2, arg3) => {
    size.x = x;
    size.y = y;
    size.width = PixelRatio.roundToNearestPixel(arg2);
    size.height = PixelRatio.roundToNearestPixel(arg3);
  });
  if (width) {
    const _Math = Math;
    const pixelSizeForLayoutSize = size.getPixelSizeForLayoutSize(size.width);
    if (Math.abs(pixelSizeForLayoutSize - size.getPixelSizeForLayoutSize(width.width)) <= 1) {
      size.width = width.width;
    }
    const _Math2 = Math;
    const pixelSizeForLayoutSize1 = obj.getPixelSizeForLayoutSize(size.height);
    if (Math.abs(pixelSizeForLayoutSize1 - size.getPixelSizeForLayoutSize(width.height)) <= 1) {
      size.height = width.height;
    }
  }
  return size;
};
