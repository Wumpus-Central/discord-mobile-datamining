// === Module 8597: BackgroundBlurFill ===

// Module 8597 (BackgroundBlurFill)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 4964 */;
import VisualEffectViewDefault from "VisualEffectView" /* 4965 */;
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let ColorUtils = fn(4409);
let closure_6 = ColorUtils.hexWithOpacity(BLACK, 0);
ColorUtils = fn(4409);
let closure_7 = ColorUtils.hexWithOpacity(BLACK, 0.2);
ColorUtils = fn(4409);
let closure_8 = ColorUtils.hexWithOpacity(BLACK, 0.4);
ColorUtils = fn(4409);
let closure_9 = ColorUtils.hexWithOpacity(BLACK, 0.5);
const __initData = { code: "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const __initData2 = { code: "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING}=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,'animate-always')};}" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx");

export const BlurTheme = fn(4965).BlurTheme;
export const BlurStyle = fn(4965).BlurStyle;
export const BackgroundBlurFill = function BackgroundBlurFill(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  let obj = blurTheme(4271);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  if (blurStyle == null) {
    blurStyle = noop.useMemo(() => {
      let str = "ultra-thin";
      if ("light" === blurTheme) {
        str = "default";
      }
      return str;
    }, items);
  }
  const items1 = [blurTheme];
  if (tintColor == null) {
    tintColor = noop.useMemo(() => "light" === blurTheme ? closure_6 : closure_8, items1);
  }
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(nativeDefault.colors.BACKGROUND_SCRIM, blurTheme);
  }
  obj = { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null };
  const items2 = [StyleSheet.absoluteFill, style];
  obj.style = items2;
  return jsx(VisualEffectViewDefault, { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null });
};
export const BackgroundBlurFillAnimated = function BackgroundBlurFillAnimated(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor, animatedProps } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  let obj = blurTheme(4271);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  if (blurStyle == null) {
    blurStyle = noop.useMemo(() => {
      let str = "ultra-thin";
      if ("light" === blurTheme) {
        str = "default";
      }
      return str;
    }, items);
  }
  const items1 = [blurTheme];
  if (tintColor == null) {
    tintColor = noop.useMemo(() => "light" === blurTheme ? closure_6 : closure_8, items1);
  }
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(nativeDefault.colors.BACKGROUND_SCRIM, blurTheme);
  }
  obj = { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null };
  const items2 = [StyleSheet.absoluteFill, style];
  obj.style = items2;
  let tmp6 = null != animatedProps;
  tmpResult = blurTheme(4262);
  if (tmp6) {
    obj = { animatedProps };
    tmp6 = obj;
  }
  const merged = Object.assign(tmp6);
  return jsx(VisualEffectViewAnimatedDefault, { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: null });
};
export const BackgroundBlurFillWithPress = function BackgroundBlurFillWithPress(style) {
  ({ blurTheme, pressed } = style);
  blurTheme = pressed;
  importDefault = undefined;
  dependencyMap = undefined;
  let token;
  let token1;
  c5 = undefined;
  const merged = Object.assign(style, Object.assign({ style: 0, blurTheme: 0, pressed: 0 }));
  let obj = blurTheme(4271);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  let items = [blurTheme];
  const tmp6 = "light" === blurTheme ? closure_6 : closure_8;
  importDefault = tmp6;
  const tmp7 = "light" === blurTheme ? closure_7 : closure_9;
  dependencyMap = tmp7;
  const memo = token.useMemo(() => {
    let str = "ultra-thin";
    if ("light" === blurTheme) {
      str = "default";
    }
    return str;
  }, items);
  let tmp2Result = tmp2(4262);
  token = tmp2Result.useToken(nativeDefault.colors.BACKGROUND_SCRIM, blurTheme);
  tmp2Result = tmp2(4262);
  token1 = tmp2Result.useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, blurTheme);
  const isBlurDisabledResult = blurTheme(4965).isBlurDisabled(merged);
  c5 = isBlurDisabledResult;
  const tmp2Result1 = blurTheme(4965);
  class B {
    constructor() {
      obj = { backgroundColor: null };
      obj2 = closure_0(closure_2[10]);
      obj3 = closure_0(closure_2[9]);
      items = [, ];
      items[0] = closure_3;
      items[1] = closure_4;
      interpolateColorResult = obj3.interpolateColor(theme.get(), [0, 1], items);
      obj.backgroundColor = obj2.withSpring(interpolateColorResult, closure_0(closure_2[11]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: tmp2(4974).withSpring, interpolateColor: tmp2(4296).interpolateColor, pressed, fallbackColor: token, fallbackColorPressed: token1, ON_PRESS_SPRING: tmp2(4978).ON_PRESS_SPRING };
  B.__closure = obj;
  B.__workletHash = 10497618157620;
  B.__initData = __initData;
  let animatedStyle = blurTheme(4296).useAnimatedStyle(B);
  const tmp2Result2 = blurTheme(4296);
  class C {
    constructor() {
      withSpringResult = undefined;
      if (!closure_5) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[10]);
        obj2 = closure_0(closure_2[9]);
        tmp4 = theme;
        tmp5 = closure_1;
        items = [, ];
        items[0] = closure_1;
        tmp6 = closure_2;
        items[1] = closure_2;
        interpolateColorResult = obj2.interpolateColor(theme.get(), [0, 1], items);
        str = "animate-always";
        withSpringResult = obj.withSpring(interpolateColorResult, closure_0(closure_2[11]).ON_PRESS_SPRING, "animate-always");
      }
      return { tintColor: withSpringResult };
    }
  }
  obj = { shouldUseFallback: isBlurDisabledResult, withSpring: tmp2(4974).withSpring, interpolateColor: tmp2(4296).interpolateColor, pressed, restingTint: tmp6, pressedTint: tmp7, ON_PRESS_SPRING: tmp2(4978).ON_PRESS_SPRING };
  C.__closure = obj;
  C.__workletHash = 11987567486157;
  C.__initData = __initData2;
  const animatedProps = blurTheme(4296).useAnimatedProps(C);
  const obj1 = { blurTheme, blurStyle: memo, style: null };
  const items1 = [token1.absoluteFill, style.style, ];
  const tmp12 = c5;
  const tmp2Result3 = blurTheme(4296);
  if (!isBlurDisabledResult) {
    animatedStyle = {};
  }
  items1[2] = animatedStyle;
  obj1.style = items1;
  let tmp14 = !isBlurDisabledResult;
  if (!isBlurDisabledResult) {
    let obj2 = { animatedProps };
    tmp14 = obj2;
  }
  const merged1 = Object.assign(tmp14);
  return tmp12(VisualEffectViewAnimatedDefault, obj1);
};