// discord_app/design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import animatedComponentDefault from "../../../../../modules/visual_effect_view/native/VisualEffectViewAnimated.tsx";
import isBlurDisabledDefault from "../../../../../modules/visual_effect_view/native/VisualEffectView.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { StyleSheet } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import hexToRgba from "../../../../../utils/ColorUtils.tsx";

const require = arg1;
const BLACK = ThemesDefault.unsafe_rawColors.BLACK;
let closure_6 = hexToRgba.hexWithOpacity(BLACK, 0);
let closure_7 = hexToRgba.hexWithOpacity(BLACK, 0.2);
let closure_8 = hexToRgba.hexWithOpacity(BLACK, 0.4);
let closure_9 = hexToRgba.hexWithOpacity(BLACK, 0.5);
let closure_10 = { code: "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
let closure_11 = { code: "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING}=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,'animate-always')};}" };
const result = require("set").fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx");

export const BlurTheme = require("isBlurDisabled").BlurTheme;
export const BlurStyle = require("isBlurDisabled").BlurStyle;
export const BackgroundBlurFill = function BackgroundBlurFill(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  if (blurStyle == null) {
    blurStyle = React.useMemo(() => {
      let str = "ultra-thin";
      if ("light" === blurTheme) {
        str = "default";
      }
      return str;
    }, items);
  }
  const items1 = [blurTheme];
  if (tintColor == null) {
    tintColor = obj2.useMemo(() => "light" === blurTheme ? closure_1_6 : closure_1_8, items1);
  }
  obj = blurTheme(4204);
  obj2 = React;
  const tmp = blurTheme;
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(ThemesDefault.colors.BACKGROUND_SCRIM, blurTheme);
  }
  style = [StyleSheet.absoluteFill, ];
  style[1] = style;
  return jsx(isBlurDisabledDefault, { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style });
};
export const BackgroundBlurFillAnimated = function BackgroundBlurFillAnimated(arg0) {
  ({ blurTheme, blurStyle, tintColor, android_fallbackColor, animatedProps } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  let obj = blurTheme(4204);
  if (blurTheme == null) {
    blurTheme = obj.useThemeContext().theme;
  }
  const items = [blurTheme];
  if (blurStyle == null) {
    blurStyle = React.useMemo(() => {
      let str = "ultra-thin";
      if ("light" === blurTheme) {
        str = "default";
      }
      return str;
    }, items);
  }
  const items1 = [blurTheme];
  if (tintColor == null) {
    tintColor = obj2.useMemo(() => "light" === blurTheme ? closure_1_6 : closure_1_8, items1);
  }
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(ThemesDefault.colors.BACKGROUND_SCRIM, blurTheme);
  }
  obj = { blurTheme, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId, style: items2 };
  items2 = [StyleSheet.absoluteFill, style];
  let tmp6 = null != animatedProps;
  obj2 = React;
  const tmp = blurTheme;
  const tmp3 = importDefault;
  const tmp4 = jsx;
  tmpResult = blurTheme(4197);
  if (tmp6) {
    obj = { animatedProps: null };
    obj[0] = animatedProps;
    tmp6 = obj;
  }
  const merged = Object.assign(tmp6);
  return tmp4(animatedComponentDefault, obj);
};
export const BackgroundBlurFillWithPress = function BackgroundBlurFillWithPress(style) {
  ({ blurTheme, pressed } = style);
  blurTheme = pressed;
  importDefault = undefined;
  dependencyMap = undefined;
  let token;
  let token1;
  c5 = undefined;
  const merged = Object.assign(style, Object.create(null));
  let obj = blurTheme(4204);
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
  let tmp2Result = tmp2(4197);
  token = tmp2Result.useToken(ThemesDefault.colors.BACKGROUND_SCRIM, blurTheme);
  tmp2Result = tmp2(4197);
  token1 = tmp2Result.useToken(ThemesDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, blurTheme);
  const isBlurDisabledResult = blurTheme(4918).isBlurDisabled(merged);
  c5 = isBlurDisabledResult;
  const tmp2Result1 = blurTheme(4918);
  class B {
    constructor() {
      obj = { backgroundColor: null };
      obj2 = theme(closure_2[10]);
      obj3 = theme(closure_2[9]);
      items = [, ];
      items[0] = closure_3;
      items[1] = closure_4;
      interpolateColorResult = obj3.interpolateColor(theme.get(), [0, 1], items);
      obj[0] = obj2.withSpring(interpolateColorResult, theme(closure_2[11]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: tmp2(4927).withSpring, interpolateColor: tmp2(4217).interpolateColor, pressed, fallbackColor: token, fallbackColorPressed: token1, ON_PRESS_SPRING: tmp2(4931).ON_PRESS_SPRING };
  B.__closure = obj;
  B.__workletHash = 10497618157620;
  B.__initData = closure_10;
  let animatedStyle = blurTheme(4217).useAnimatedStyle(B);
  const tmp2Result2 = blurTheme(4217);
  class C {
    constructor() {
      withSpringResult = undefined;
      if (!closure_5) {
        tmp2 = theme;
        tmp3 = closure_2;
        obj = theme(closure_2[10]);
        obj2 = theme(closure_2[9]);
        tmp4 = theme;
        tmp5 = closure_1;
        items = [, ];
        items[0] = closure_1;
        tmp6 = closure_2;
        items[1] = closure_2;
        interpolateColorResult = obj2.interpolateColor(theme.get(), [0, 1], items);
        str = "animate-always";
        withSpringResult = obj.withSpring(interpolateColorResult, theme(closure_2[11]).ON_PRESS_SPRING, "animate-always");
      }
      return { tintColor: withSpringResult };
    }
  }
  obj = { shouldUseFallback: isBlurDisabledResult, withSpring: tmp2(4927).withSpring, interpolateColor: tmp2(4217).interpolateColor, pressed, restingTint: tmp6, pressedTint: tmp7, ON_PRESS_SPRING: tmp2(4931).ON_PRESS_SPRING };
  C.__closure = obj;
  C.__workletHash = 11987567486157;
  C.__initData = closure_11;
  const animatedProps = blurTheme(4217).useAnimatedProps(C);
  obj1 = { blurTheme, blurStyle: memo, style: null };
  const items1 = [token1.absoluteFill, style.style, ];
  const tmp12 = c5;
  const tmp2Result3 = blurTheme(4217);
  if (!isBlurDisabledResult) {
    animatedStyle = {};
  }
  items1[2] = animatedStyle;
  obj1[2] = items1;
  let tmp14 = !isBlurDisabledResult;
  if (!isBlurDisabledResult) {
    let obj2 = { animatedProps: null };
    obj2[0] = animatedProps;
    tmp14 = obj2;
  }
  const merged1 = Object.assign(tmp14);
  return tmp12(animatedComponentDefault, obj1);
};