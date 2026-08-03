import noop from "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";
import hexToRgba from "hexToRgba";

const require = arg1;
const BLACK = require("Themes").unsafe_rawColors.BLACK;
let closure_6 = hexToRgba.hexWithOpacity(BLACK, 0);
let closure_7 = hexToRgba.hexWithOpacity(BLACK, 0.2);
let closure_8 = hexToRgba.hexWithOpacity(BLACK, 0.4);
let closure_9 = hexToRgba.hexWithOpacity(BLACK, 0.5);
let closure_10 = { code: "function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}" };
let closure_11 = { code: "function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,blurTint,blurTintPressed,ON_PRESS_SPRING}=this.__closure;return{blurTintRgba:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[blurTint,blurTintPressed]),ON_PRESS_SPRING,'animate-always')};}" };
const result = require("jsxProd").fileFinishedImporting("design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx");

export const BlurTheme = require("isBlurDisabled").BlurTheme;
export const BlurStyle = require("isBlurDisabled").BlurStyle;
export const BackgroundBlurFill = function BackgroundBlurFill(arg0) {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let blurAmount;
  let blurStyle;
  let blurTheme;
  let blurTintRgba;
  let style;
  ({ blurTheme, blurStyle, blurTintRgba, android_fallbackColor } = arg0);
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
  if (blurTintRgba == null) {
    blurTintRgba = obj2.useMemo(() => {
      if ("light" === blurTheme) {
        let hexToRgbaStringResult = blurTheme(outer1_2[4]).hexToRgbaString(outer1_6);
        const obj2 = blurTheme(outer1_2[4]);
      } else {
        hexToRgbaStringResult = blurTheme(outer1_2[4]).hexToRgbaString(outer1_8);
        const obj = blurTheme(outer1_2[4]);
      }
      return hexToRgbaStringResult;
    }, items1);
  }
  obj = blurTheme(3905);
  obj2 = React;
  const tmp = blurTheme;
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(importDefault(712).colors.BACKGROUND_SCRIM, blurTheme);
  }
  style = [StyleSheet.absoluteFill, ];
  style[1] = style;
  return jsx(importDefault(4594), { blurTheme, blurStyle, blurAmount, blurTintRgba, android_fallbackColor, android_blurTargetViewNativeId, style });
};
export const BackgroundBlurFillAnimated = function BackgroundBlurFillAnimated(arg0) {
  let android_blurTargetViewNativeId;
  let android_fallbackColor;
  let animatedProps;
  let blurAmount;
  let blurStyle;
  let blurTheme;
  let blurTintRgba;
  let style;
  ({ blurTheme, blurStyle, blurTintRgba, android_fallbackColor, animatedProps } = arg0);
  ({ style, blurAmount, android_blurTargetViewNativeId } = arg0);
  let obj = blurTheme(3905);
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
  if (blurTintRgba == null) {
    blurTintRgba = obj2.useMemo(() => {
      if ("light" === blurTheme) {
        let hexToRgbaStringResult = blurTheme(outer1_2[4]).hexToRgbaString(outer1_6);
        const obj2 = blurTheme(outer1_2[4]);
      } else {
        hexToRgbaStringResult = blurTheme(outer1_2[4]).hexToRgbaString(outer1_8);
        const obj = blurTheme(outer1_2[4]);
      }
      return hexToRgbaStringResult;
    }, items1);
  }
  if (android_fallbackColor == null) {
    android_fallbackColor = tmpResult.useToken(importDefault(712).colors.BACKGROUND_SCRIM, blurTheme);
  }
  obj = { blurTheme, blurStyle, blurAmount, blurTintRgba, android_fallbackColor, android_blurTargetViewNativeId, style: items2 };
  items2 = [StyleSheet.absoluteFill, style];
  let tmp6 = null != animatedProps;
  obj2 = React;
  const tmp = blurTheme;
  const tmp3 = importDefault;
  const tmp4 = jsx;
  tmpResult = blurTheme(3897);
  if (tmp6) {
    obj = { animatedProps: null };
    obj[0] = animatedProps;
    tmp6 = obj;
  }
  const merged = Object.assign(tmp6);
  return tmp4(importDefault(4593), obj);
};
export const BackgroundBlurFillWithPress = function BackgroundBlurFillWithPress(style) {
  let blurTheme;
  let pressed;
  ({ blurTheme, pressed } = style);
  blurTheme = pressed;
  let importDefault;
  let dependencyMap;
  let token;
  let token1;
  let c5;
  const merged = Object.assign(style, Object.create(null));
  let obj = blurTheme(3905);
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
  let tmp2Result = tmp2(3897);
  token = tmp2Result.useToken(importDefault(712).colors.BACKGROUND_SCRIM, blurTheme);
  tmp2Result = tmp2(3897);
  token1 = tmp2Result.useToken(importDefault(712).colors.BACKGROUND_SCRIM_LIGHTBOX, blurTheme);
  const isBlurDisabledResult = blurTheme(4594).isBlurDisabled(merged);
  c5 = isBlurDisabledResult;
  const tmp2Result1 = blurTheme(4594);
  class T {
    constructor() {
      obj = { backgroundColor: null };
      obj2 = blurTheme(c2[10]);
      obj3 = blurTheme(c2[9]);
      items = [, ];
      items[0] = c3;
      items[1] = c4;
      interpolateColorResult = obj3.interpolateColor(blurTheme.get(), [0, 1], items);
      obj[0] = obj2.withSpring(interpolateColorResult, blurTheme(c2[11]).ON_PRESS_SPRING, "animate-always");
      return obj;
    }
  }
  obj = { withSpring: tmp2(4603).withSpring, interpolateColor: tmp2(4054).interpolateColor, pressed, fallbackColor: token, fallbackColorPressed: token1, ON_PRESS_SPRING: tmp2(4607).ON_PRESS_SPRING };
  T.__closure = obj;
  T.__workletHash = 10497618157620;
  T.__initData = closure_10;
  let animatedStyle = blurTheme(4054).useAnimatedStyle(T);
  const tmp2Result2 = blurTheme(4054);
  const fn = function p() {
    let blurTintRgba;
    if (!c5) {
      const obj = blurTheme(_undefined[10]);
      const items = [c1, _undefined];
      const obj2 = blurTheme(_undefined[9]);
      blurTintRgba = obj.withSpring(blurTheme(_undefined[9]).interpolateColor(blurTheme.get(), [0, 1], items), blurTheme(_undefined[11]).ON_PRESS_SPRING, "animate-always");
      const interpolateColorResult = blurTheme(_undefined[9]).interpolateColor(blurTheme.get(), [0, 1], items);
    }
    return { blurTintRgba };
  };
  obj = { shouldUseFallback: isBlurDisabledResult, withSpring: tmp2(4603).withSpring, interpolateColor: tmp2(4054).interpolateColor, pressed, blurTint: tmp6, blurTintPressed: tmp7, ON_PRESS_SPRING: tmp2(4607).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 3902745666351;
  fn.__initData = closure_11;
  const animatedProps = blurTheme(4054).useAnimatedProps(fn);
  const obj1 = { blurTheme, blurStyle: memo, style: null };
  const items1 = [token1.absoluteFill, style.style, ];
  const tmp12 = c5;
  const tmp2Result3 = blurTheme(4054);
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
  return tmp12(importDefault(4593), obj1);
};