// === Module 16761: VoicePanelVisualEffectView ===

// Module 16761 (VoicePanelVisualEffectView)
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4197 */;
import TwinButtons from "TwinButtons" /* 8984 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ StyleSheet, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { wrapper: null, border: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.borderWidth = 1;
createCacheKey.borderColor = ThemesDefault.colors.BORDER_SUBTLE;
createCacheKey.borderRadius = ThemesDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS;
obj[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function VoicePanelVisualEffectViewInner(matchAppTheme) {
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.THEME_LOCKED_BLUR_FALLBACK);
  const tmp2 = callback2();
  obj = { blurTheme: str, android_fallbackColor: null };
  let tmp4;
  if (!flag) {
    tmp4 = token;
  }
  obj[1] = tmp4;
  obj = { style: tmp2.wrapper, children: null };
  const items = [closure_4(TwinButtons.BackgroundBlurFill, obj), closure_4(closure_3, { style: tmp2.border })];
  obj[1] = items;
  return callback(closure_3, obj);
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = memoResult;