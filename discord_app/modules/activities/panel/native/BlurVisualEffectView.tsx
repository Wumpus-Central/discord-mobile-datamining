// === Module 17118: BlurVisualEffectView ===

// Module 17118 (BlurVisualEffectView)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4306 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5015 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const ColorUtils = fn(4454);
const tintColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.24);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default noop.memo(() => {
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, "dark");
  obj = { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" };
  return jsx(VisualEffectViewDefault, { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
});