// _runtime/05838_areDimensionsNotEqual.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const PixelRatio = get_ActivityIndicator.PixelRatio;

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
  const size = { x: 0, y: 0, width: 0, height: 0 };
  current.measureLayout(current, (arg0, arg1) => {
    size.x = arg0;
    size.y = arg1;
    size.width = size.roundToNearestPixel(arg2);
    size.height = size.roundToNearestPixel(arg3);
  });
  return { width: size.width, height: size.height };
};
export const measureFirstChildLayout = function measureFirstChildLayout(current, current2) {
  const obj = { x: 0, y: 0, width: 0, height: 0 };
  current.measureLayout(current2, (arg0, arg1) => {
    size.x = arg0;
    size.y = arg1;
    size.width = size.roundToNearestPixel(arg2);
    size.height = size.roundToNearestPixel(arg3);
  });
  return obj;
};
export const measureItemLayout = function measureItemLayout(current, closure_27) {
  const size = { x: 0, y: 0, width: 0, height: 0 };
  current.measureLayout(current, (arg0, arg1) => {
    size.x = arg0;
    size.y = arg1;
    size.width = size.roundToNearestPixel(arg2);
    size.height = size.roundToNearestPixel(arg3);
  });
  if (closure_27) {
    const _Math = Math;
    const pixelSizeForLayoutSize = size.getPixelSizeForLayoutSize(size.width);
    if (Math.abs(pixelSizeForLayoutSize - size.getPixelSizeForLayoutSize(closure_27.width)) <= 1) {
      size.width = closure_27.width;
    }
    const _Math2 = Math;
    const pixelSizeForLayoutSize1 = obj.getPixelSizeForLayoutSize(size.height);
    if (Math.abs(pixelSizeForLayoutSize1 - size.getPixelSizeForLayoutSize(closure_27.height)) <= 1) {
      size.height = closure_27.height;
    }
  }
  return size;
};