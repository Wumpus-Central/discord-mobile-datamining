// === Module 8875: BackgroundBlurFill ===

// Module 8875 (BackgroundBlurFill)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5173 */;
import VisualEffectView from "VisualEffectView" /* 5174 */;
import spring from "spring" /* 5185 */;
import springPresets from "springPresets" /* 5189 */;
import noop from "module_19" /* 19 */;

const VisualEffectViewDefault = VisualEffectView;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let ColorUtils = fn(4605);
let closure_6 = ColorUtils.hexWithOpacity(BLACK, 0);
ColorUtils = fn(4605);
let closure_7 = ColorUtils.hexWithOpacity(BLACK, 0.2);
ColorUtils = fn(4605);
let closure_8 = ColorUtils.hexWithOpacity(BLACK, 0.4);
ColorUtils = fn(4605);
let closure_9 = ColorUtils.hexWithOpacity(BLACK, 0.5);
const __initData = { code: "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const __initData2 = { code: "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING}=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,'animate-always')};}" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx");

export const BlurTheme = fn(5174).BlurTheme;
export const BlurStyle = fn(5174).BlurStyle;
export const BackgroundBlurFill = function BackgroundBlurFill(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  if (blurStyle == null) {
    blurStyle = noop.useMemo(() => {
      let str = "ultra-thin";
      if (obj.isBlurThemeLight(pressed)) {
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
  obj = blurTheme(4466);
  const tmpResult = blurTheme(4457);
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(nativeDefault.colors.BACKGROUND_SCRIM, tmpResult2.normalizeBlurTheme(blurTheme));
  }
  const obj3 = { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null };
  const items2 = [StyleSheet.absoluteFill, style];
  obj3.style = items2;
  return jsx(VisualEffectViewDefault, { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null });
};
export const BackgroundBlurFillAnimated = function BackgroundBlurFillAnimated(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor, animatedProps } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  if (blurStyle == null) {
    blurStyle = noop.useMemo(() => {
      let str = "ultra-thin";
      if (obj.isBlurThemeLight(pressed)) {
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
  obj = blurTheme(4466);
  const tmpResult = blurTheme(4457);
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(nativeDefault.colors.BACKGROUND_SCRIM, tmpResult2.normalizeBlurTheme(blurTheme));
  }
  const obj3 = { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null };
  const items2 = [StyleSheet.absoluteFill, style];
  obj3.style = items2;
  let tmp6 = null != animatedProps;
  tmpResult2 = blurTheme(5174);
  if (tmp6) {
    const obj4 = { animatedProps };
    tmp6 = obj4;
  }
  const merged = Object.assign(tmp6);
  return jsx(VisualEffectViewAnimatedDefault, { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null });
};
export const BackgroundBlurFillWithPress = function BackgroundBlurFillWithPress(style) {
  ({ blurTheme, pressed } = style);
  importDefault = undefined;
  dependencyMap = undefined;
  let token;
  let token1;
  c5 = undefined;
  const merged = Object.assign(style, Object.assign({ style: 0, blurTheme: 0, pressed: 0 }));
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  closure_129_0 = blurTheme;
  let items = [blurTheme];
  const memo = token.useMemo(() => {
    let str = "ultra-thin";
    if (obj.isBlurThemeLight(pressed)) {
      str = "default";
    }
    return str;
  }, items);
  obj = pressed(4466);
  const normalizeBlurThemeResult = pressed(5174).normalizeBlurTheme(blurTheme);
  const tmp2Result = pressed(5174);
  const tmp6 = pressed(5174).isBlurThemeLight(blurTheme) ? closure_6 : closure_8;
  importDefault = tmp6;
  const tmp2Result8 = pressed(5174);
  const tmp7 = pressed(5174).isBlurThemeLight(blurTheme) ? closure_7 : closure_9;
  dependencyMap = tmp7;
  const tmp2Result9 = pressed(5174);
  token = pressed(4457).useToken(nativeDefault.colors.BACKGROUND_SCRIM, normalizeBlurThemeResult);
  const tmp2Result10 = pressed(4457);
  token1 = pressed(4457).useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, normalizeBlurThemeResult);
  const tmp2Result11 = pressed(4457);
  const isBlurDisabledResult = pressed(5174).isBlurDisabled(merged);
  c5 = isBlurDisabledResult;
  const tmp2Result12 = pressed(5174);
  const fn = function p() {
    const obj = { backgroundColor: null };
    const obj2 = spring;
    const items = [token, token1];
    obj.backgroundColor = obj2.withSpring(ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], items), springPresets.ON_PRESS_SPRING, "animate-always");
    return obj;
  };
  const tmp2Result13 = pressed(4492);
  fn.__closure = { withSpring: pressed(5185).withSpring, interpolateColor: pressed(4492).interpolateColor, pressed, fallbackColor: token, fallbackColorPressed: token1, ON_PRESS_SPRING: pressed(5189).ON_PRESS_SPRING };
  fn.__workletHash = 10497618157620;
  fn.__initData = __initData;
  let animatedStyle = tmp2Result13.useAnimatedStyle(fn);
  let obj2 = { withSpring: pressed(5185).withSpring, interpolateColor: pressed(4492).interpolateColor, pressed, fallbackColor: token, fallbackColorPressed: token1, ON_PRESS_SPRING: pressed(5189).ON_PRESS_SPRING };
  class C {
    constructor() {
      withSpringResult = undefined;
      if (!closure_5) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[10]);
        obj2 = closure_0(closure_2[9]);
        tmp4 = pressed;
        tmp5 = closure_1;
        items = [, ];
        items[0] = closure_1;
        tmp6 = closure_2;
        items[1] = closure_2;
        interpolateColorResult = obj2.interpolateColor(pressed.get(), [0, 1], items);
        str = "animate-always";
        withSpringResult = obj.withSpring(interpolateColorResult, closure_0(closure_2[11]).ON_PRESS_SPRING, "animate-always");
      }
      return { tintColor: withSpringResult };
    }
  }
  const tmp2Result14 = pressed(4492);
  C.__closure = { shouldUseFallback: isBlurDisabledResult, withSpring: pressed(5185).withSpring, interpolateColor: pressed(4492).interpolateColor, pressed, restingTint: tmp6, pressedTint: tmp7, ON_PRESS_SPRING: pressed(5189).ON_PRESS_SPRING };
  C.__workletHash = 11987567486157;
  C.__initData = __initData2;
  const animatedProps = tmp2Result14.useAnimatedProps(C);
  const obj4 = { blurTheme, blurStyle: memo, style: null };
  const items1 = [token1.absoluteFill, style.style, ];
  let obj3 = { shouldUseFallback: isBlurDisabledResult, withSpring: pressed(5185).withSpring, interpolateColor: pressed(4492).interpolateColor, pressed, restingTint: tmp6, pressedTint: tmp7, ON_PRESS_SPRING: pressed(5189).ON_PRESS_SPRING };
  const tmp12 = c5;
  if (!isBlurDisabledResult) {
    animatedStyle = {};
  }
  items1[2] = animatedStyle;
  obj4.style = items1;
  let tmp14 = !isBlurDisabledResult;
  if (!isBlurDisabledResult) {
    const obj5 = { animatedProps };
    tmp14 = obj5;
  }
  const merged1 = Object.assign(tmp14);
  return tmp12(VisualEffectViewAnimatedDefault, obj4);
};