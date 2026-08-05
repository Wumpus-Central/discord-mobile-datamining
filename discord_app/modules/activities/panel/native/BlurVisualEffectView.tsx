// discord_app/modules/activities/panel/native/BlurVisualEffectView.tsx
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import hexToRgba from "hexToRgba";
import importAllResult from "noop";

const require = arg1;
let closure_5 = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.BLACK, 0.24);
const memoResult = require("noop").memo(() => {
  let obj = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  const token = obj.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { style: StyleSheet.absoluteFill, blurStyle: "default", blurTintRgba: null, android_fallbackColor: null, blurAmount: 0.24, blurTheme: "dark" };
  const tmp2 = require("../../../visual_effect_view/native/VisualEffectView.tsx");
  obj[2] = require("../../../../utils/ColorUtils.tsx") /* hexToRgba */.hexToRgbaString(closure_5);
  obj[3] = token;
  return <tmp2 style={StyleSheet.absoluteFill} blurStyle="default" blurTintRgba={null} android_fallbackColor={null} blurAmount={0.24} blurTheme="dark" />;
});
const result = require("jsxProd").fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default memoResult;