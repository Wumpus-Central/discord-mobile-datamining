// _runtime/metro/05652__.js
import get_ActivityIndicator from "00017__.js";

({ PixelRatio, Platform } = get_ActivityIndicator);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};
