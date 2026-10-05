// _runtime/06040_react-native.js
import react_native from "00017_react-native.js";

let PixelRatio;
let Platform;
({ PixelRatio, Platform } = react_native);

export const getDefaultHeaderHeight = function getDefaultHeaderHeight(layout, modal, headerStatusBarHeight) {
  let height;
  let width;
  ({ width, height } = layout);
  return 64 + headerStatusBarHeight;
};
