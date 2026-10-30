// === Module 19084: BlurVisualEffectView ===

// Module 19084 (BlurVisualEffectView)
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5591 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5595 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const ThemeTypes = fn(1072).ThemeTypes;
const jsx = fn(21).jsx;
const ColorUtils = fn(5006);
const tintColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.24);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/BlurVisualEffectView.tsx");

export default noop.memo(function BlurVisualEffectView() {
  const token = useToken.useToken(nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK, ThemeTypes.DARK);
  return jsx(VisualEffectViewDefault, { style: StyleSheet.absoluteFill, blurStyle: "default", tintColor, android_fallbackColor: token, blurAmount: 0.24, blurTheme: "dark" });
});