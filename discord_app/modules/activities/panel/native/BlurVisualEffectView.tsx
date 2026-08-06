// discord_app/modules/activities/panel/native/BlurVisualEffectView.tsx
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import hexToRgba from "hexToRgba";
import importAllResult from "noop";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { isBlurDisabled } from "../../../visual_effect_view/native/VisualEffectView.tsx";

const require = arg1;
let closure_5 = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.24);
const memoResult = require("noop").memo(() => {
  let obj = map;
  const token = obj.useToken(Themes.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor: closure_5, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" };
  return jsx(isBlurDisabled, { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor: closure_5, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
});
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;