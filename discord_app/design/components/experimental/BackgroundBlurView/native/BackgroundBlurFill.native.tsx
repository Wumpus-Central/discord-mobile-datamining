// discord_app/design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken2 from "../../../../tokens/native/useToken.tsx";
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../animation/reanimated/spring/springPresets.tsx";
import VisualEffectViewAnimatedDefault from "../../../../../modules/visual_effect_view/native/VisualEffectViewAnimated.tsx";
import VisualEffectView from "../../../../../modules/visual_effect_view/native/VisualEffectView.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import ColorUtils_mod from "../../../../../utils/ColorUtils.tsx";
import ReactCompilerGating_mod from "../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const VisualEffectViewDefault = VisualEffectView;
let dependencyMap, importDefault, withSpringResult;

let closure_3 = ["style", "blurTheme", "pressed"];
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let ColorUtils = ColorUtils_mod;
let closure_8 = ColorUtils.hexWithOpacity(BLACK, 0);
ColorUtils = ColorUtils_mod;
let closure_9 = ColorUtils.hexWithOpacity(BLACK, 0.2);
ColorUtils = ColorUtils_mod;
let closure_10 = ColorUtils.hexWithOpacity(BLACK, 0.4);
ColorUtils = ColorUtils_mod;
let closure_11 = ColorUtils.hexWithOpacity(BLACK, 0.5);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let theme = arg0;
      const obj = native;
      if (arg0 == null) {
        theme = obj.useThemeContext().theme;
      }
      return theme;
    }
  : (arg0) => {
      let theme = arg0;
      const obj = native;
      if (arg0 == null) {
        theme = obj.useThemeContext().theme;
      }
      return theme;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let str = "ultra-thin";
      const obj = VisualEffectView;
      if (obj.isBlurThemeLight(arg0)) {
        str = "default";
      }
      let tmp = arg1;
      if (arg1 == null) {
        tmp = str;
      }
      return tmp;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let memo = arg1;
      const items = [arg0];
      if (arg1 == null) {
        memo = react.useMemo(() => {
          let str = "ultra-thin";
          const obj = VisualEffectView;
          if (obj.isBlurThemeLight(closure_0)) {
            str = "default";
          }
          return str;
        }, items);
      }
      return memo;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let tmp = arg1;
      const obj = VisualEffectView;
      if (arg1 == null) {
        tmp = obj.isBlurThemeLight(arg0) ? closure_8 : closure_10;
      }
      return tmp;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      let memo = arg1;
      const items = [arg0];
      if (arg1 == null) {
        memo = react.useMemo(() => {
          const obj = VisualEffectView;
          return obj.isBlurThemeLight(closure_0) ? closure_8 : closure_10;
        }, items);
      }
      return memo;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const tmpResult = VisualEffectView;
        const normalizeBlurThemeResult = tmpResult.normalizeBlurTheme(arg0);
        cResult[0] = arg0;
        cResult[1] = normalizeBlurThemeResult;
        tmp4 = normalizeBlurThemeResult;
      } else {
        tmp4 = cResult[1];
      }
      let token = arg1;
      const useToken = useToken2.useToken;
      useToken2;
      if (arg1 == null) {
        token = useToken(nativeDefault.colors.BACKGROUND_SCRIM, tmp4);
      }
      return token;
    }
  : (arg0, arg1) => {
      let token = arg1;
      const useToken = useToken2.useToken;
      useToken2;
      const BACKGROUND_SCRIM = nativeDefault.colors.BACKGROUND_SCRIM;
      const obj = VisualEffectView;
      if (arg1 == null) {
        token = useToken(BACKGROUND_SCRIM, obj.normalizeBlurTheme(arg0));
      }
      return token;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (blurTheme) => {
      let android_blurTargetViewNativeId;
      let android_fallbackColor;
      let blurAmount;
      let blurStyle;
      let style;
      let tintColor;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(10);
      ({ style, blurAmount, android_blurTargetViewNativeId } = blurTheme);
      ({ blurStyle, tintColor, android_fallbackColor } = blurTheme);
      const tmp3 = closure_12(blurTheme.blurTheme);
      const tmp4 = closure_13(tmp3, blurStyle);
      const tmp5 = closure_14(tmp3, tintColor);
      const tmp6 = closure_15(tmp3, android_fallbackColor);
      if (cResult[0] !== style) {
        const items = [StyleSheet.absoluteFill, style];
        cResult[0] = style;
        cResult[1] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === android_blurTargetViewNativeId) {
        if (cResult[3] === tmp6) {
          if (cResult[4] === blurAmount) {
            if (cResult[5] === tmp4) {
              if (cResult[6] === tmp3) {
                if (cResult[7] === tmp7) {
                  let tmp9;
                  if (cResult[8] === tmp5) {
                    tmp9 = cResult[9];
                  }
                  return tmp9;
                }
              }
            }
          }
        }
      }
      const tmp10 = jsx(VisualEffectViewDefault, {
        blurTheme: tmp3,
        blurStyle: tmp4,
        blurAmount,
        tintColor: tmp5,
        android_fallbackColor: tmp6,
        android_blurTargetViewNativeId,
        style: tmp7,
      });
      cResult[2] = android_blurTargetViewNativeId;
      cResult[3] = tmp6;
      cResult[4] = blurAmount;
      cResult[5] = tmp4;
      cResult[6] = tmp3;
      cResult[7] = tmp7;
      cResult[8] = tmp5;
      cResult[9] = tmp10;
      tmp9 = tmp10;
    }
  : (blurTheme) => {
      let android_blurTargetViewNativeId;
      let android_fallbackColor;
      let blurAmount;
      let blurStyle;
      let style;
      let tintColor;
      ({ style, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId } = blurTheme);
      const tmp = closure_12(blurTheme.blurTheme);
      const tmp2 = closure_13(tmp, blurStyle);
      const items = [StyleSheet.absoluteFill, style];
      const tmp3 = closure_14(tmp, tintColor);
      return jsx(VisualEffectViewDefault, {
        blurTheme: tmp,
        blurStyle: tmp2,
        blurAmount,
        tintColor: tmp3,
        android_fallbackColor: closure_15(tmp, android_fallbackColor),
        android_blurTargetViewNativeId,
        style: items,
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const __initData = {
  code: 'function BackgroundBlurFillNativeTsx1(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,"animate-always")};}',
};
const __initData2 = {
  code: 'function BackgroundBlurFillNativeTsx2(){const{shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING}=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,"animate-always")};}',
};
const __initData3 = {
  code: "function BackgroundBlurFillNativeTsx3(){const{withSpring,interpolateColor,pressed,fallbackColor,fallbackColorPressed,ON_PRESS_SPRING}=this.__closure;return{backgroundColor:withSpring(interpolateColor(pressed.get(),[0,1],[fallbackColor,fallbackColorPressed]),ON_PRESS_SPRING,'animate-always')};}",
};
const __initData4 = {
  code: "function BackgroundBlurFillNativeTsx4(){const{shouldUseFallback,withSpring,interpolateColor,pressed,restingTint,pressedTint,ON_PRESS_SPRING}=this.__closure;return{tintColor:shouldUseFallback?undefined:withSpring(interpolateColor(pressed.get(),[0,1],[restingTint,pressedTint]),ON_PRESS_SPRING,'animate-always')};}",
};
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (blurTheme) => {
      let android_blurTargetViewNativeId;
      let android_fallbackColor;
      let animatedProps;
      let blurAmount;
      let blurStyle;
      let style;
      let tintColor;
      let tmp7;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(13);
      ({ style, blurAmount, android_blurTargetViewNativeId, animatedProps } = blurTheme);
      ({ blurStyle, tintColor, android_fallbackColor } = blurTheme);
      const tmp3 = closure_12(blurTheme.blurTheme);
      const tmp4 = closure_13(tmp3, blurStyle);
      const tmp5 = closure_14(tmp3, tintColor);
      const tmp6 = closure_15(tmp3, android_fallbackColor);
      if (cResult[0] !== style) {
        const items = [StyleSheet.absoluteFill, style];
        cResult[0] = style;
        cResult[1] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== animatedProps) {
        let tmp11 = null != animatedProps;
        if (tmp11) {
          tmp11 = { animatedProps };
          const obj2 = { animatedProps };
        }
        cResult[2] = animatedProps;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === android_blurTargetViewNativeId) {
        if (cResult[5] === tmp6) {
          if (cResult[6] === blurAmount) {
            if (cResult[7] === tmp4) {
              if (cResult[8] === tmp3) {
                if (cResult[9] === tmp7) {
                  if (cResult[10] === tmp9) {
                    let tmp12;
                    if (cResult[11] === tmp5) {
                      tmp12 = cResult[12];
                    }
                    return tmp12;
                  }
                }
              }
            }
          }
        }
      }
      VisualEffectViewAnimatedDefault;
      const merged = Object.assign(tmp9);
      const tmp15 = (
        <tmp13
          blurTheme={tmp3}
          blurStyle={tmp4}
          blurAmount={blurAmount}
          tintColor={tmp5}
          android_fallbackColor={tmp6}
          android_blurTargetViewNativeId={android_blurTargetViewNativeId}
          style={tmp7}
        />
      );
      cResult[4] = android_blurTargetViewNativeId;
      cResult[5] = tmp6;
      cResult[6] = blurAmount;
      cResult[7] = tmp4;
      cResult[8] = tmp3;
      cResult[9] = tmp7;
      cResult[10] = tmp9;
      cResult[11] = tmp5;
      cResult[12] = tmp15;
      tmp12 = tmp15;
    }
  : (animatedProps) => {
      let android_blurTargetViewNativeId;
      let android_fallbackColor;
      let blurAmount;
      let blurStyle;
      let style;
      let tintColor;
      animatedProps = animatedProps.animatedProps;
      ({ style, blurStyle, blurAmount, tintColor, android_fallbackColor, android_blurTargetViewNativeId } =
        animatedProps);
      const tmp = closure_12(animatedProps.blurTheme);
      const tmp2 = closure_13(tmp, blurStyle);
      const items = [StyleSheet.absoluteFill, style];
      let tmp7 = null != animatedProps;
      const tmp3 = closure_14(tmp, tintColor);
      VisualEffectViewAnimatedDefault;
      if (tmp7) {
        tmp7 = { animatedProps };
        const obj2 = { animatedProps };
      }
      const merged = Object.assign(tmp7);
      return (
        <tmp6
          blurTheme={tmp}
          blurStyle={tmp2}
          blurAmount={blurAmount}
          tintColor={tmp3}
          android_fallbackColor={closure_15(tmp, android_fallbackColor)}
          android_blurTargetViewNativeId={android_blurTargetViewNativeId}
          style={items}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (blurTheme) => {
      let closure_1;
      let closure_2;
      let pressed;
      let style;
      let tmp7;
      let token;
      let token1;
      let obj = pressed(576);
      const cResult = obj.c(16);
      ({ style, pressed } = blurTheme);
      blurTheme = blurTheme.blurTheme;
      const tmp4 = token1(blurTheme, token);
      const tmp5 = closure_12(blurTheme);
      const tmp6 = closure_13(tmp5, undefined);
      if (cResult[0] !== tmp5) {
        const tmpResult = pressed(5773);
        const normalizeBlurThemeResult = tmpResult.normalizeBlurTheme(tmp5);
        cResult[0] = tmp5;
        cResult[1] = normalizeBlurThemeResult;
        tmp7 = normalizeBlurThemeResult;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult8 = pressed(5773);
      const tmp9 = tmpResult8.isBlurThemeLight(tmp5) ? closure_8 : closure_10;
      importDefault = tmp9;
      const tmpResult9 = pressed(5773);
      const tmp10 = tmpResult9.isBlurThemeLight(tmp5) ? closure_9 : closure_11;
      dependencyMap = tmp10;
      const tmpResult10 = pressed(4580);
      token = tmpResult10.useToken(nativeDefault.colors.BACKGROUND_SCRIM, tmp7);
      const tmpResult11 = pressed(4580);
      token1 = tmpResult11.useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, tmp7);
      const tmpResult12 = pressed(5773);
      const isBlurDisabledResult = tmpResult12.isBlurDisabled(tmp4);
      react = isBlurDisabledResult;
      const fn = function y() {
        let interpolateColorResult;
        let withSpring;
        const obj = {
          backgroundColor: withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always"),
        };
        withSpring = spring.withSpring;
        spring;
        const items = [token, token1];
        const obj2 = ReanimatedRexport;
        interpolateColorResult = obj2.interpolateColor(pressed.get(), [0, 1], items);
        return obj;
      };
      const tmpResult13 = pressed(4612);
      let obj2 = {
        withSpring: pressed(5597).withSpring,
        interpolateColor: pressed(4612).interpolateColor,
        pressed,
        fallbackColor: token,
        fallbackColorPressed: token1,
        ON_PRESS_SPRING: pressed(5598).ON_PRESS_SPRING,
      };
      fn.__closure = obj2;
      fn.__workletHash = 8923865688660;
      fn.__initData = __initData;
      const animatedStyle = tmpResult13.useAnimatedStyle(fn);
      const tmpResult14 = pressed(4612);
      class I {
        constructor() {
          let tintColor;
          if (!react) {
            const withSpring = spring.withSpring;
            spring;
            const items = [closure_1, closure_2];
            const obj = ReanimatedRexport;
            const interpolateColorResult = obj.interpolateColor(pressed.get(), [0, 1], items);
            tintColor = withSpring(interpolateColorResult, springPresets.ON_PRESS_SPRING, "animate-always");
          }
          return { tintColor };
        }
      }
      I.__closure = {
        shouldUseFallback: isBlurDisabledResult,
        withSpring: pressed(5597).withSpring,
        interpolateColor: pressed(4612).interpolateColor,
        pressed,
        restingTint: tmp9,
        pressedTint: tmp10,
        ON_PRESS_SPRING: pressed(5598).ON_PRESS_SPRING,
      };
      I.__workletHash = 15619337296749;
      I.__initData = __initData2;
      ({
        shouldUseFallback: isBlurDisabledResult,
        withSpring: pressed(5597).withSpring,
        interpolateColor: pressed(4612).interpolateColor,
        pressed,
        restingTint: tmp9,
        pressedTint: tmp10,
        ON_PRESS_SPRING: pressed(5598).ON_PRESS_SPRING,
      });
      const animatedProps = tmpResult14.useAnimatedProps(I);
      if (cResult[2] === animatedStyle) {
        let tmp17;
        if (cResult[3] === isBlurDisabledResult) {
          tmp17 = cResult[4];
        }
        if (cResult[5] === style) {
          let tmp18;
          if (cResult[6] === tmp17) {
            tmp18 = cResult[7];
          }
          if (cResult[8] === animatedProps) {
            let tmp20;
            if (cResult[9] === isBlurDisabledResult) {
              tmp20 = cResult[10];
            }
            if (cResult[11] === tmp6) {
              if (cResult[12] === tmp18) {
                if (cResult[13] === tmp20) {
                  let tmp22;
                  if (cResult[14] === tmp5) {
                    tmp22 = cResult[15];
                  }
                  return tmp22;
                }
              }
            }
            VisualEffectViewAnimatedDefault;
            const merged = Object.assign(tmp20);
            const tmp28 = <tmp11Result blurTheme={tmp5} blurStyle={tmp6} style={tmp18} />;
            cResult[11] = tmp6;
            cResult[12] = tmp18;
            cResult[13] = tmp20;
            cResult[14] = tmp5;
            cResult[15] = tmp28;
            tmp22 = tmp28;
          }
          let tmp21 = !isBlurDisabledResult;
          if (tmp21) {
            tmp21 = { animatedProps };
            const obj5 = { animatedProps };
          }
          cResult[8] = animatedProps;
          cResult[9] = isBlurDisabledResult;
          cResult[10] = tmp21;
          tmp20 = tmp21;
        }
        let items = [StyleSheet.absoluteFill, style, tmp17];
        cResult[5] = style;
        cResult[6] = tmp17;
        cResult[7] = items;
        tmp18 = items;
      }
      let obj6 = animatedStyle;
      if (!isBlurDisabledResult) {
        obj6 = {};
      }
      cResult[2] = animatedStyle;
      cResult[3] = isBlurDisabledResult;
      cResult[4] = obj6;
      tmp17 = obj6;
    }
  : (pressed) => {
      let blurTheme;
      let closure_1;
      let closure_2;
      let style;
      pressed = pressed.pressed;
      ({ style, blurTheme } = pressed);
      const merged = Object.assign(pressed, Object.assign({ style: 0, blurTheme: 0, pressed: 0 }));
      const tmp2 = closure_12(blurTheme);
      const tmp4 = pressed;
      const tmp3 = closure_13(tmp2, undefined);
      let obj = pressed(5773);
      const normalizeBlurThemeResult = obj.normalizeBlurTheme(tmp2);
      let obj2 = pressed(5773);
      const tmp7 = obj2.isBlurThemeLight(tmp2) ? closure_8 : closure_10;
      importDefault = tmp7;
      const tmp4Result = tmp4(5773);
      const tmp8 = tmp4Result.isBlurThemeLight(tmp2) ? closure_9 : closure_11;
      dependencyMap = tmp8;
      const tmp4Result6 = tmp4(4580);
      const token = tmp4Result6.useToken(nativeDefault.colors.BACKGROUND_SCRIM, normalizeBlurThemeResult);
      const tmp4Result7 = tmp4(4580);
      const token1 = tmp4Result7.useToken(nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX, normalizeBlurThemeResult);
      const tmp4Result8 = tmp4(5773);
      const isBlurDisabledResult = tmp4Result8.isBlurDisabled(merged);
      let c5 = isBlurDisabledResult;
      const tmp4Result9 = tmp4(4612);
      class C {
        constructor() {
          obj = { backgroundColor: null };
          tmp = closure_0(closure_2[13]);
          withSpring = tmp.withSpring;
          obj2 = closure_0(closure_2[12]);
          items = [,];
          items[0] = closure_3;
          items[1] = closure_4;
          interpolateColorResult = obj2.interpolateColor(pressed.get(), [0, 1], items);
          obj.backgroundColor = withSpring(
            interpolateColorResult,
            closure_0(closure_2[14]).ON_PRESS_SPRING,
            "animate-always",
          );
          return obj;
        }
      }
      C.__closure = {
        withSpring: tmp4(5597).withSpring,
        interpolateColor: tmp4(4612).interpolateColor,
        pressed,
        fallbackColor: token,
        fallbackColorPressed: token1,
        ON_PRESS_SPRING: tmp4(5598).ON_PRESS_SPRING,
      };
      C.__workletHash = 16933322441398;
      C.__initData = __initData3;
      ({
        withSpring: tmp4(5597).withSpring,
        interpolateColor: tmp4(4612).interpolateColor,
        pressed,
        fallbackColor: token,
        fallbackColorPressed: token1,
        ON_PRESS_SPRING: tmp4(5598).ON_PRESS_SPRING,
      });
      let animatedStyle = tmp4Result9.useAnimatedStyle(C);
      const tmp4Result10 = tmp4(4612);
      class T {
        constructor() {
          withSpringResult = undefined;
          if (!closure_5) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            tmp4 = closure_0(closure_2[13]);
            withSpring = tmp4.withSpring;
            obj = closure_0(closure_2[12]);
            tmp5 = pressed;
            tmp6 = closure_1;
            items = [,];
            items[0] = closure_1;
            tmp7 = closure_2;
            items[1] = closure_2;
            interpolateColorResult = obj.interpolateColor(pressed.get(), [0, 1], items);
            str = "animate-always";
            withSpringResult = withSpring(
              interpolateColorResult,
              closure_0(closure_2[14]).ON_PRESS_SPRING,
              "animate-always",
            );
          }
          return { tintColor: withSpringResult };
        }
      }
      T.__closure = {
        shouldUseFallback: isBlurDisabledResult,
        withSpring: tmp4(5597).withSpring,
        interpolateColor: tmp4(4612).interpolateColor,
        pressed,
        restingTint: tmp7,
        pressedTint: tmp8,
        ON_PRESS_SPRING: tmp4(5598).ON_PRESS_SPRING,
      };
      T.__workletHash = 1826548941643;
      T.__initData = __initData4;
      ({
        shouldUseFallback: isBlurDisabledResult,
        withSpring: tmp4(5597).withSpring,
        interpolateColor: tmp4(4612).interpolateColor,
        pressed,
        restingTint: tmp7,
        pressedTint: tmp8,
        ON_PRESS_SPRING: tmp4(5598).ON_PRESS_SPRING,
      });
      const animatedProps = tmp4Result10.useAnimatedProps(T);
      let items = [StyleSheet.absoluteFill, style];
      VisualEffectViewAnimatedDefault;
      if (!isBlurDisabledResult) {
        animatedStyle = {};
      }
      items[2] = animatedStyle;
      let tmp15 = !isBlurDisabledResult;
      if (tmp15) {
        tmp15 = { animatedProps };
        const obj6 = { animatedProps };
      }
      const merged1 = Object.assign(tmp15);
      return <tmp14 blurTheme={tmp2} blurStyle={tmp3} style={items} />;
    };
const result = size.fileFinishedImporting(
  "design/components/experimental/BackgroundBlurView/native/BackgroundBlurFill.native.tsx",
);

export const BlurTheme = VisualEffectView.BlurTheme;
export const BlurStyle = VisualEffectView.BlurStyle;
export const BackgroundBlurFill = tmp2;
export const BackgroundBlurFillAnimated = tmp3;
export const BackgroundBlurFillWithPress = tmp4;
