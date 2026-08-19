// discord_app/modules/activities/panel/native/BlurVisualEffectView.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import isBlurDisabledDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import { StyleSheet } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import hexToRgba from "../../../../utils/ColorUtils.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = fn;
let closure_5 = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BLACK, 0.24);
const memoResult = importAllResult.memo(() => {
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor: closure_5, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" };
  return jsx(isBlurDisabledDefault, { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor: closure_5, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
});
const result = require("obj132").fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;