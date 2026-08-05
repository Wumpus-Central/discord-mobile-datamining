import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../design/tokens/native/useToken.tsx";
import { hexToRgba } from "../../../../utils/ColorUtils.tsx";
import { isBlurDisabled } from "../../../visual_effect_view/native/VisualEffectView.tsx";
// discord_app/modules/activities/panel/native/BlurVisualEffectView.tsx
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import hexToRgba from "hexToRgba";
import importAllResult from "noop";

const require = arg1;
let closure_5 = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.24);
const memoResult = require("noop").memo(() => {
  let obj = map /* map */;
  const token = obj.useToken(Themes.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { style: StyleSheet.absoluteFill, blurStyle: "default", blurTintRgba: null, android_fallbackColor: null, blurAmount: 0.24, blurTheme: "dark" };
  const tmp2 = isBlurDisabled;
  obj[2] = hexToRgba /* hexToRgba */.hexToRgbaString(closure_5);
  obj[3] = token;
  return <tmp2 style={StyleSheet.absoluteFill} blurStyle="default" blurTintRgba={null} android_fallbackColor={null} blurAmount={0.24} blurTheme="dark" />;
});
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;