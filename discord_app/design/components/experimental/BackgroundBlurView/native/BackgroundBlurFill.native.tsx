// === Module 8305: BackgroundBlurFill ===

// Module 8305 (BackgroundBlurFill)
import nativeDefault from "native" /* 575 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5722 */;
import VisualEffectView from "VisualEffectView" /* 5723 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const VisualEffectViewDefault = VisualEffectView;

require = fn;
let StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let ColorUtils = fn(5138);
let closure_6 = ColorUtils.hexWithOpacity(BLACK, 0);
ColorUtils = fn(5138);
let closure_7 = ColorUtils.hexWithOpacity(BLACK, 0.2);
ColorUtils = fn(5138);
let closure_8 = ColorUtils.hexWithOpacity(BLACK, 0.4);
ColorUtils = fn(5138);
let closure_9 = ColorUtils.hexWithOpacity(BLACK, 0.5);
let closure_10 = { code: "(function BackgroundBlurFillNativeTsx1(){let[withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING]=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};})" };
let closure_11 = { code: "(function BackgroundBlurFillNativeTsx2(){let[shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING]=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,'animate-always')};})" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx");

export const BlurTheme = fn(5723).BlurTheme;
export const BlurStyle = fn(5723).BlurStyle;
export function BackgroundBlurFill(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  items = [blurTheme];
  if (blurStyle == null) {
    blurStyle = noop.useMemo(() => {
      let str = "ultra-thin";
      if (obj.isBlurThemeLight(c0)) {
        str = "default";
      }
      return str;
    }, items);
  }
  closure_129_0 = blurTheme;
  const items1 = [blurTheme];
  if (tintColor == null) {
    tintColor = noop.useMemo(() => VisualEffectView.isBlurThemeLight(blurTheme) ? closure_6 : closure_8, items1);
  }
  obj = blurTheme(5207);
  const tmpResult = blurTheme(5719);
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(nativeDefault.colors.BACKGROUND_SCRIM, tmpResult2.normalizeBlurTheme(blurTheme));
  }
  const obj3 = { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null };
  const items2 = [StyleSheet.absoluteFill, style];
  obj3.style = items2;
  return jsx(VisualEffectViewDefault, { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null });
}
export function BackgroundBlurFillAnimated(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor, animatedProps } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  items = [blurTheme];
  if (blurStyle == null) {
    blurStyle = noop.useMemo(() => {
      let str = "ultra-thin";
      if (obj.isBlurThemeLight(c0)) {
        str = "default";
      }
      return str;
    }, items);
  }
  closure_129_0 = blurTheme;
  const items1 = [blurTheme];
  if (tintColor == null) {
    tintColor = noop.useMemo(() => VisualEffectView.isBlurThemeLight(blurTheme) ? closure_6 : closure_8, items1);
  }
  obj = blurTheme(5207);
  const tmpResult = blurTheme(5719);
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(nativeDefault.colors.BACKGROUND_SCRIM, tmpResult2.normalizeBlurTheme(blurTheme));
  }
  const obj3 = { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null };
  const items2 = [StyleSheet.absoluteFill, style];
  obj3.style = items2;
  let tmp6 = null != animatedProps;
  tmpResult2 = blurTheme(5723);
  if (tmp6) {
    const obj4 = { animatedProps };
    tmp6 = obj4;
  }
  const merged = Object.assign(tmp6);
  return jsx(VisualEffectViewAnimatedDefault, { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null });
}
export function BackgroundBlurFillWithPress(style) {
  ({ blurTheme, pressed } = style);
  const merged = Object.assign(style, Object.assign({ style: 0, blurTheme: 0, pressed: 0 }));
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  _require = blurTheme;
  items = [blurTheme];
  const memo = noop.useMemo(() => {
    let str = "ultra-thin";
    if (obj.isBlurThemeLight(c0)) {
      str = "default";
    }
    return str;
  }, items);
  obj = require("native");
  const normalizeBlurThemeResult = require("VisualEffectView").normalizeBlurTheme(blurTheme);
  const tmp2Result = require("VisualEffectView");
  const tmp2Result8 = require("VisualEffectView");
  const tmp6 = require("VisualEffectView").isBlurThemeLight(blurTheme) ? c6 : closure_8;
  const tmp2Result9 = require("VisualEffectView");
  const tmp7 = require("VisualEffectView").isBlurThemeLight(blurTheme) ? closure_7 : closure_9;
  const token = require("useToken").useToken(nativeDefault.colors.BACKGROUND_SCRIM, normalizeBlurThemeResult);
  const tmp2Result10 = require("useToken");
  const token1 = require("useToken").useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, normalizeBlurThemeResult);
  const tmp2Result11 = require("useToken");
  const isBlurDisabledResult = require("VisualEffectView").isBlurDisabled(merged);
  const tmp2Result12 = require("VisualEffectView");
  const items1 = [closure_10, require("spring/spring").withSpring, require("module_1652").interpolateColor, pressed, token, token1, require("springPresets").ON_PRESS_SPRING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c5 = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  class BackgroundBlurFillNativeTsx1 {
    constructor() {
      obj = { backgroundColor: null };
      items = [, ];
      items[0] = closure_3;
      items[1] = closure_4;
      obj.backgroundColor = closure_0(closure_1(closure_2.get(), [0, 1], items), closure_5, "animate-always");
      return obj;
    }
  }
  const items2 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  BackgroundBlurFillNativeTsx1.__closure = items2;
  BackgroundBlurFillNativeTsx1.__workletHash = 9525556178957;
  BackgroundBlurFillNativeTsx1.__initData = tmp12;
  let animatedStyle = require("module_1652").useAnimatedStyle(BackgroundBlurFillNativeTsx1);
  const tmp2Result13 = require("module_1652");
  const items3 = [closure_11, isBlurDisabledResult, require("spring/spring").withSpring, require("module_1652").interpolateColor, pressed, tmp6, tmp7, require("springPresets").ON_PRESS_SPRING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items3;
  class BackgroundBlurFillNativeTsx2 {
    constructor() {
      tintColor = undefined;
      if (!closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        tmp5 = closure_4;
        items = [, ];
        items[0] = closure_4;
        tmp6 = closure_5;
        items[1] = closure_5;
        tmp7 = closure_6;
        str = "animate-always";
        tintColor = closure_1(closure_2(closure_3.get(), [0, 1], items), closure_6, "animate-always");
      }
      return { tintColor };
    }
  }
  const items4 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  BackgroundBlurFillNativeTsx2.__closure = items4;
  BackgroundBlurFillNativeTsx2.__workletHash = 6005645675156;
  BackgroundBlurFillNativeTsx2.__initData = tmp19;
  const animatedProps = require("module_1652").useAnimatedProps(BackgroundBlurFillNativeTsx2);
  const obj2 = { blurTheme, blurStyle: memo, style: null };
  const items5 = [StyleSheet.absoluteFill, style.style, ];
  const tmp28 = c5;
  const tmp2Result14 = require("module_1652");
  if (!isBlurDisabledResult) {
    animatedStyle = {};
  }
  items5[2] = animatedStyle;
  obj2.style = items5;
  let tmp30 = !isBlurDisabledResult;
  if (!isBlurDisabledResult) {
    const obj3 = { animatedProps };
    tmp30 = obj3;
  }
  const merged1 = Object.assign(tmp30);
  return tmp28(VisualEffectViewAnimatedDefault, obj2);
}