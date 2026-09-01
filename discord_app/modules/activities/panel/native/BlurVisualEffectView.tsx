// === Module 16606: ? ===

// Module 16606
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4197 */;
import isBlurDisabledDefault from "isBlurDisabled" /* 4918 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import hexToRgba from "hexToRgba" /* 4326 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_5 = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BLACK, 0.24);
const memoResult = importAllResult.memo(() => {
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor: closure_5, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" };
  return jsx(isBlurDisabledDefault, { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor: closure_5, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
});
const result = require("set").fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;