// === Module 5532: getDefaultHeaderHeight ===

// Module 5532 (getDefaultHeaderHeight)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ PixelRatio, Platform } = get_ActivityIndicator);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};