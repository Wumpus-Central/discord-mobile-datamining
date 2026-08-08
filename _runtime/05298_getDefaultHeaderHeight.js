// _runtime/05298_getDefaultHeaderHeight.js
import get_ActivityIndicator from "get ActivityIndicator";

let PixelRatio;
let Platform;
({ PixelRatio, Platform } = get_ActivityIndicator);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, closure_0, headerStatusBarHeight) {
  let height;
  let width;
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};