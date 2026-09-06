// === Module 17181: VoicePanelVisualEffectView ===

// Module 17181 (VoicePanelVisualEffectView)
import ThemesDefault from "Themes" /* 576 */;
import map from "map" /* 4262 */;
import TwinButtons from "TwinButtons" /* 8902 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
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
  let token = obj.useToken(ThemesDefault.colors.THEME_LOCKED_BLUR_FALLBACK);
  if (flag) {
    token = obj2.useToken(ThemesDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  }
  const tmp4 = callback3();
  obj = { style: tmp4.wrapper, children: null };
  const items = [callback(TwinButtons.BackgroundBlurFill, { blurTheme: "dark", android_fallbackColor: token }), ];
  obj = { style: tmp4.border };
  items[1] = callback(closure_3, obj);
  obj[1] = items;
  return callback2(closure_3, obj);
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = memoResult;