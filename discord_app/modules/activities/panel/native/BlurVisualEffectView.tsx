// === Module 17477: BlurVisualEffectView ===

// Module 17477 (BlurVisualEffectView)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4457 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5174 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const ThemeTypes = fn(1074).ThemeTypes;
const jsx = fn(21).jsx;
const ColorUtils = fn(4605);
const tintColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.24);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default noop.memo(() => {
  const token = useToken.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, ThemeTypes.DARK);
  return jsx(VisualEffectViewDefault, { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
});