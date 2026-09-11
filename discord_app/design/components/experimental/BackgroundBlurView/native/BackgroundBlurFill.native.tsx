// discord_app/design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import VisualEffectViewAnimatedDefault from "../../../../../modules/visual_effect_view/native/VisualEffectViewAnimated.tsx";
import VisualEffectView from "../../../../../modules/visual_effect_view/native/VisualEffectView.tsx";
import spring from "../../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const VisualEffectViewDefault = VisualEffectView;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let ColorUtils = fn(4456);
let closure_6 = ColorUtils.hexWithOpacity(BLACK, 0);
ColorUtils = fn(4456);
let closure_7 = ColorUtils.hexWithOpacity(BLACK, 0.2);
ColorUtils = fn(4456);
let closure_8 = ColorUtils.hexWithOpacity(BLACK, 0.4);
ColorUtils = fn(4456);
let closure_9 = ColorUtils.hexWithOpacity(BLACK, 0.5);
const __initData = {
  code: "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}",
};
const __initData2 = {
  code: "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING}=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,'animate-always')};}",
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx",
);

export const BlurTheme = fn(5016).BlurTheme;
export const BlurStyle = fn(5016).BlurStyle;
export const BackgroundBlurFill = function BackgroundBlurFill(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  let obj = blurTheme(4317);
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
    tintColor = noop.useMemo(() => (VisualEffectView.isBlurThemeLight(blurTheme) ? closure_6 : closure_8), items1);
  }
  tmp(4308);
  const tmpResult = tmp(5016);
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(
      nativeDefault.colors.BACKGROUND_SCRIM,
      tmpResult.normalizeBlurTheme(blurTheme),
    );
  }
  obj = {
    blurTheme,
    blurStyle,
    blurAmount,
    tintColor,
    android_fallbackColor,
    android_blurTargetViewNativeId,
    style: null,
  };
  const items2 = [StyleSheet.absoluteFill, style];
  obj.style = items2;
  return jsx(VisualEffectViewDefault, {
    blurTheme,
    blurStyle,
    blurAmount,
    tintColor,
    android_fallbackColor,
    android_blurTargetViewNativeId,
    style: null,
  });
};
export const BackgroundBlurFillAnimated = function BackgroundBlurFillAnimated(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor, animatedProps } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  let obj = blurTheme(4317);
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
    tintColor = noop.useMemo(() => (VisualEffectView.isBlurThemeLight(blurTheme) ? closure_6 : closure_8), items1);
  }
  tmp(4308);
  const tmpResult = tmp(5016);
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(
      nativeDefault.colors.BACKGROUND_SCRIM,
      tmpResult.normalizeBlurTheme(blurTheme),
    );
  }
  obj = {
    blurTheme,
    blurStyle,
    blurAmount,
    tintColor,
    android_fallbackColor,
    android_blurTargetViewNativeId,
    style: null,
  };
  const items2 = [StyleSheet.absoluteFill, style];
  obj.style = items2;
  let tmp6 = null != animatedProps;
  if (tmp6) {
    obj = { animatedProps };
    tmp6 = obj;
  }
  const merged = Object.assign(tmp6);
  return jsx(VisualEffectViewAnimatedDefault, {
    blurTheme,
    blurStyle,
    blurAmount,
    tintColor,
    android_fallbackColor,
    android_blurTargetViewNativeId,
    style: null,
  });
};
export const BackgroundBlurFillWithPress = function BackgroundBlurFillWithPress(style) {
  ({ blurTheme, pressed } = style);
  importDefault = undefined;
  dependencyMap = undefined;
  let token;
  let token1;
  c5 = undefined;
  const merged = Object.assign(style, Object.assign({ style: 0, blurTheme: 0, pressed: 0 }));
  let obj = pressed(4317);
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
  let tmp2Result = tmp2(5016);
  const normalizeBlurThemeResult = tmp2Result.normalizeBlurTheme(blurTheme);
  tmp2Result = tmp2(5016);
  const tmp6 = tmp2Result.isBlurThemeLight(blurTheme) ? closure_6 : closure_8;
  importDefault = tmp6;
  const tmp7 = pressed(5016).isBlurThemeLight(blurTheme) ? closure_7 : closure_9;
  dependencyMap = tmp7;
  const tmp2Result1 = pressed(5016);
  token = pressed(4308).useToken(nativeDefault.colors.BACKGROUND_SCRIM, normalizeBlurThemeResult);
  const tmp2Result2 = pressed(4308);
  token1 = pressed(4308).useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, normalizeBlurThemeResult);
  const tmp2Result3 = pressed(4308);
  const isBlurDisabledResult = pressed(5016).isBlurDisabled(merged);
  c5 = isBlurDisabledResult;
  const tmp2Result4 = pressed(5016);
  const fn = function p() {
    const obj = { backgroundColor: null };
    const obj2 = spring;
    const items = [token, token1];
    obj.backgroundColor = obj2.withSpring(
      ReanimatedRexport.interpolateColor(pressed.get(), [0, 1], items),
      springPresets.ON_PRESS_SPRING,
      "animate-always",
    );
    return obj;
  };
  obj = {
    withSpring: tmp2(5025).withSpring,
    interpolateColor: tmp2(4343).interpolateColor,
    pressed,
    fallbackColor: token,
    fallbackColorPressed: token1,
    ON_PRESS_SPRING: tmp2(5029).ON_PRESS_SPRING,
  };
  fn.__closure = obj;
  fn.__workletHash = 10497618157620;
  fn.__initData = __initData;
  let animatedStyle = pressed(4343).useAnimatedStyle(fn);
  const tmp2Result5 = pressed(4343);
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
        items = [,];
        items[0] = closure_1;
        tmp6 = closure_2;
        items[1] = closure_2;
        interpolateColorResult = obj2.interpolateColor(pressed.get(), [0, 1], items);
        str = "animate-always";
        withSpringResult = obj.withSpring(
          interpolateColorResult,
          closure_0(closure_2[11]).ON_PRESS_SPRING,
          "animate-always",
        );
      }
      return { tintColor: withSpringResult };
    }
  }
  obj = {
    shouldUseFallback: isBlurDisabledResult,
    withSpring: tmp2(5025).withSpring,
    interpolateColor: tmp2(4343).interpolateColor,
    pressed,
    restingTint: tmp6,
    pressedTint: tmp7,
    ON_PRESS_SPRING: tmp2(5029).ON_PRESS_SPRING,
  };
  C.__closure = obj;
  C.__workletHash = 11987567486157;
  C.__initData = __initData2;
  const animatedProps = pressed(4343).useAnimatedProps(C);
  const obj1 = { blurTheme, blurStyle: memo, style: null };
  const items1 = [token1.absoluteFill, style.style];
  const tmp12 = c5;
  const tmp2Result6 = pressed(4343);
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
