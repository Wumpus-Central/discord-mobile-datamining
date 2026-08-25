// _runtime/05404_getDefaultHeaderHeight.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

({ PixelRatio, Platform } = get_ActivityIndicator);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};