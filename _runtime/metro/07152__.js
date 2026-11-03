// === Module 7152: ? ===

// Module 7152
import get_ActivityIndicator from "module_17" /* 17 */;

({ PixelRatio, Platform } = get_ActivityIndicator);

export function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
}