// discord_app/modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let StyleSheet;
let c3;
let c4;
let c5;
const require = arg1;
({ StyleSheet, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { wrapper: null, border: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.borderWidth = 1;
createCacheKey.borderColor = require("Themes").colors.BORDER_SUBTLE;
createCacheKey.borderRadius = require("Themes").modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS;
obj[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function VoicePanelVisualEffectViewInner(matchAppTheme) {
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(3897) /* map */;
  const token = obj.useToken(importDefault(712).colors.THEME_LOCKED_BLUR_FALLBACK);
  const tmp2 = callback2();
  obj = { blurTheme: str, android_fallbackColor: null };
  let tmp5;
  if (!flag) {
    tmp5 = token;
  }
  obj[1] = tmp5;
  const tmp4Result = closure_4(require(8240) /* TwinButtons */.BackgroundBlurFill, obj);
  let tmp7 = tmp4Result;
  if (tmp3) {
    obj = { style: null, children: null };
    obj[0] = tmp2.wrapper;
    const items = [tmp4Result, ];
    const obj1 = { style: null };
    obj1[0] = tmp2.border;
    items[1] = tmp4(closure_3, obj1);
    obj[1] = items;
    tmp7 = callback(closure_3, obj);
  }
  return tmp7;
});
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = memoResult;